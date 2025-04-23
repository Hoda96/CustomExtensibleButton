import { ButtonProps } from './Button.types';
import classNames from 'classnames';


const Button = ({
  variant = 'primary',
  size = 'medium',
  color = 'blue',
  isLoading = false,
  icon,
  children,
  className,
  ...props
}: ButtonProps) => {
  // Define color variants explicitly to work with Tailwind's JIT compiler
  const colorVariants = {
    blue: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
      ghost: 'text-blue-500 hover:bg-blue-100',
    },
    red: {
      primary: 'bg-red-500 text-white hover:bg-red-600',
      outline: 'border border-red-500 text-red-500 hover:bg-red-100',
      ghost: 'text-red-500 hover:bg-red-100',
    },
    green: {
      primary: 'bg-green-500 text-white hover:bg-green-600',
      outline: 'border border-green-500 text-green-500 hover:bg-green-100',
      ghost: 'text-green-500 hover:bg-green-100',
    },
    // Add more colors as needed
  };

  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const classes = classNames(
    baseStyles,
    colorVariants[color][variant],
    sizeStyles[size],
    className
  );

  return (
    <button
      className={classes}
      disabled={isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin mr-2">⏳</span>
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      {children}
    </button>
  );
};

export { Button };
