import React, { useEffect, useRef, useState } from 'react';
import { SelectInputProps, Option } from './SelectInput.types';

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  placeholder = 'Search...',
  options = [],
  fetchOptions,
  onSelect,
  allowCustomInput = false,
  fullWidth = false,
  error,
}) => {
  const [input, setInput] = useState('');
  const [resolvedOptions, setResolvedOptions] = useState<Option[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const isAsync = !!fetchOptions;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!input && !isAsync) {
      setResolvedOptions(options);
      return;
    }

    if (isAsync) {
      let active = true;
      setLoading(true);
      fetchOptions?.(input).then((results) => {
        if (active) {
          setResolvedOptions(results);
          setLoading(false);
        }
      });
      return () => {
        active = false;
      };
    } else {
      const filtered = options.filter((opt) =>
        opt.label.toLowerCase().includes(input.toLowerCase())
      );
      setResolvedOptions(filtered);
    }
  }, [input, options, fetchOptions, isAsync]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setShowDropdown(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const selectOption = (option: Option | null) => {
    if (option) {
      setInput(option.label);
    }
    setShowDropdown(false);
    setHighlightedIndex(-1);
    onSelect(option);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % resolvedOptions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + resolvedOptions.length) % resolvedOptions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        selectOption(resolvedOptions[highlightedIndex]);
      } else if (allowCustomInput && input) {
        selectOption({ label: input, value: input });
      }
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  const clearInput = () => {
    setInput('');
    onSelect(null);
    setResolvedOptions([]);
    setShowDropdown(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-64'}`}
    >
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full rounded-lg border px-4 py-2 pr-10 focus:outline-none focus:ring-2 ${
            error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-500'
          }`}
        />

        {input && (
          <button
            onClick={clearInput}
            className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
            aria-label="Clear selection"
          >
            ✕
          </button>
        )}
      </div>

      {showDropdown && (
        <ul className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-md">
          {loading ? (
            <li className="px-4 py-2 text-sm text-gray-500">Loading...</li>
          ) : resolvedOptions.length > 0 ? (
            resolvedOptions.map((option, index) => (
              <li
                key={option.value}
                onClick={() => selectOption(option)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-50 ${
                  index === highlightedIndex ? 'bg-blue-100' : ''
                }`}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-500">No results found</li>
          )}
        </ul>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default SelectInput;
