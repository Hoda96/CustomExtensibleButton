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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded focus:outline-none transition-colors';
  const variantStyles = {
    primary: `bg-${color}-500 text-white hover:bg-${color}-600`,
    outline: `border border-${color}-500 text-${color}-500 hover:bg-${color}-100`,
    ghost: `text-${color}-500 hover:bg-${color}-100`,
  };
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    { 'opacity-50 cursor-not-allowed': isLoading },
    className
  );

  return (
    <button className={classes} disabled={isLoading} {...props}>
      {isLoading && (
        <span
          className="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"
          data-testid="spinner"
        />
      )}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
export {Button}