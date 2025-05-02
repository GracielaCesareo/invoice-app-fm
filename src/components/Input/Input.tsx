import React from 'react';
import { InputProps, InputSize } from './Input.types';

const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'block rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300';
  const sizeStyles: Record<InputSize, string> = {
    sm: 'border-primaryHover text-sm px-3 py-2',
    md: 'border-primaryHover text-base px-4 py-2.5',
    lg: 'border-primaryHover text-lg px-5 py-3',
  };
  const errorStyles = error ? 'border-danger focus:ring-red-400' : 'border-primaryHover focus:ring-primary';

  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-fit'}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        className={`${baseStyles} ${sizeStyles[size as InputSize]} ${errorStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
