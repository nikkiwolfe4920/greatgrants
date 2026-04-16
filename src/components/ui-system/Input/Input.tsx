/**
 * Input Component
 * Aligned with Untitled UI Design System
 */

import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'disabled';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  state?: InputState;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      state = 'default',
      label,
      helperText,
      errorMessage,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Size styles
    const sizeStyles: Record<InputSize, string> = {
      sm: 'px-3 py-1.5 text-sm h-9',
      md: 'px-3.5 py-2 text-base h-10',
      lg: 'px-4 py-2.5 text-base h-11',
    };

    // State styles
    const stateStyles: Record<InputState, string> = {
      default: `
        border-gray-300 text-gray-900
        placeholder:text-gray-400
        hover:border-gray-400
        focus:border-brand-600 focus:ring-4 focus:ring-brand-100
      `,
      error: `
        border-error-600 text-gray-900
        placeholder:text-gray-400
        focus:border-error-600 focus:ring-4 focus:ring-error-100
      `,
      disabled: `
        bg-gray-50 border-gray-200 text-gray-400
        cursor-not-allowed opacity-60
      `,
    };

    // Base input styles
    const inputStyles = `
      w-full rounded-md border bg-white
      transition-all duration-150
      focus:outline-none
      ${sizeStyles[size]}
      ${stateStyles[disabled ? 'disabled' : state]}
      ${icon && iconPosition === 'left' ? 'pl-10' : ''}
      ${icon && iconPosition === 'right' ? 'pr-10' : ''}
      ${className}
    `;

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {icon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            className={inputStyles.replace(/\s+/g, ' ').trim()}
            disabled={disabled}
            aria-invalid={state === 'error'}
            aria-describedby={
              errorMessage ? 'error-message' : helperText ? 'helper-text' : undefined
            }
            {...props}
          />

          {/* Right Icon */}
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {icon}
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && !errorMessage && (
          <p id="helper-text" className="mt-1.5 text-sm text-gray-600">
            {helperText}
          </p>
        )}

        {/* Error Message */}
        {errorMessage && (
          <p id="error-message" className="mt-1.5 text-sm text-error-600">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
