/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Social = ({ children, className, Icon, to, onClick, style, size, title }) => {
  const handleClick = () => {
    if (to) {
      window.open(to, "_blank", "noopener,noreferrer");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} bg-white text-light-generalText hover:border hover:text-active hover:border-light-accent hover:bg-light-secondary  p-3 flex w-8 h-8 justify-center items-center text-sm focus:outline-none rounded-full shadow-md dark:btnCV focusBtn`}
      style={{ position: 'relative' }}
      tabIndex="0"
      title={title}
    >
      <span>{children}</span>
      {Icon && (
        <div className="flex-shrink-0">
          <Icon style={style} size={size} className="flex text-lg hover:font-extrabold justify-center" />
        </div>
      )}
    </button>
  );
};

export default Social;
