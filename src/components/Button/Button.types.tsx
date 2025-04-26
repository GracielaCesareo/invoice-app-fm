// Define types for the Button props
export interface ButtonProps {
    children: React.ReactNode;          // Button content
    variant?: 'primary' | 'secondary' | 'danger'; // Button style variant
    size?: 'small' | 'medium' | 'large';         // Button size
    disabled?: boolean;                 // Is the button disabled?
    className?: string;                 // Additional classes (optional)
    onClick?: () => void;                // Click event handler
  };