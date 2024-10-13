/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Tooltip = ({ children, text, className }) => {
  return (
    <div className="relative group">
      {children}
      <div className={`${className} absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded py-1 px-2 z-10`}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;