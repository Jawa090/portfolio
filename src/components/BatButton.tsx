
import { ButtonHTMLAttributes } from 'react';

interface BatButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
}

export const BatButton = ({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}: BatButtonProps) => {
  return (
    <button
      className={`
        relative overflow-hidden group
        ${size === 'default' ? 'h-12 px-6' : 'h-16 px-8'}
        ${variant === 'default' 
          ? 'bg-bat-900 hover:bg-bat-800' 
          : 'border border-bat-700 hover:bg-bat-900/50'
        }
        transition-all duration-300 ease-out
        rounded-md text-white font-mono
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
        before:translate-x-[-200%] before:transition-transform before:duration-[700ms]
        hover:before:translate-x-[200%]
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
