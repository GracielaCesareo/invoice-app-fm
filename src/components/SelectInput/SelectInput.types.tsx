export interface Option {
  label: string;
  value: string;
}

export interface SelectInputProps {
  label?: string;
  placeholder?: string;
  options?: Option[];
  fetchOptions?: (input: string) => Promise<Option[]>;
  onSelect: (option: Option | null) => void;
  allowCustomInput?: boolean;
  fullWidth?: boolean;
  error?: string;
}