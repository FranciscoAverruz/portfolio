/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const InputField = ({ label, name, type, required, errorMessage, className, icon, inputRef, inputMode, pattern, ...rest }) => {
  return (
    <div className="relative">
      {label && (
        <label htmlFor={name} className="labelInput">
          {label}{required && <span className='ml-1'>*</span>}
        </label>
      )}
      <div className="relative flex items-center justify-center">
      <div className="absolute left-0 h-8 w-10 flex items-center justify-center rounded-l-md top-0 border-r-2 dark:border-r-dark-secondary/50 my-1">
          <span className="text-light-generalText/30 dark:text-dark-generalText/30">{icon}</span>
        </div>
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          ref={inputRef}
          inputMode={inputMode}
          pattern={pattern} 
          className={`${className} inputStyle pl-12`}
          {...rest}
        />
      </div>
      {errorMessage && (
        <span className="errorMsg">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputField;
