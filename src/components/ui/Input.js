import React from 'react';
import './Input.css';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  icon: Icon,
  fullWidth = true,
  ...props 
}) => {
  return (
    <div className={`input-wrapper ${fullWidth ? 'input-full' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        {Icon && <Icon className="input-icon" />}
        <input
          type={type}
          className={`input-field ${error ? 'input-error' : ''} ${Icon ? 'input-with-icon' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
      {error && <span className="input-error-text">{error}</span>}
    </div>
  );
};

export default Input;
