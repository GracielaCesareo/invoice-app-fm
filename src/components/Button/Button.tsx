// src/components/Button/Button.tsx
import React from 'react';
import clsx from 'clsx';
import { ButtonProps, ButtonSize } from './Button.types';
import { FaSpinner } from 'react-icons/fa';
// Button component implementation
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'start',
  fullWidth = false,
  disabled = false,
  loading = false
}) => {
    const baseStyles = 'flex items-center gap-2 px-4 py-2 rounded-3xl font-medium transition-colors duration-300';

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-5 py-3',
    };
    
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primaryHover ',
      secondary: 'bg-secondary text-gray-800 hover:bg-secondaryHover',
      danger: 'bg-danger text-white hover:bg-dangerHover',
    };
    
  
    return (
      <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'start' && <span className="flex-shrink-0">{icon}</span>}
          {children && <span>{children}</span>}
          {icon && iconPosition === 'end' && <span className="flex-shrink-0">{icon}</span>}
        </>
      )}
    </button>
    );
  };
  
export default Button;

