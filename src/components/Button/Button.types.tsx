

// Define types for the Button props
export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type IconPosition = 'start' | 'end';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}