// components/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', disabled = false }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
