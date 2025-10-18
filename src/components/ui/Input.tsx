import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const containerClass = `mb-4 ${fullWidth ? 'w-full' : 'w-full md:w-auto'}`;
  const labelClass = 'block text-sm font-medium text-text-secondary mb-1';
  const inputBaseClass = 'block w-full rounded-md border border-border py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary';
  const inputClass = error 
    ? `${inputBaseClass} border-error focus:ring-error focus:border-error` 
    : `${inputBaseClass} focus:border-primary focus:ring-primary`;
  const errorClass = 'mt-1 text-sm text-error';
  const helperClass = 'mt-1 text-sm text-text-secondary';

  return (
    <div className={containerClass}>
      {label && <label className={labelClass}>{label}</label>}
      <input 
        className={`${inputClass} ${className}`}
        {...props} 
      />
      {error ? (
        <p className={errorClass}>{error}</p>
      ) : helperText ? (
        <p className={helperClass}>{helperText}</p>
      ) : null}
    </div>
  );
};

export default Input;