/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Social = ({
  children,
  className,
  Icon,
  to,
  onClick,
  style,
  size,
  title,
}) => {
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
      className={`group ${className} bg-transparent text-light-generalText focus:outline-none flex items-center hover:text-light-active dark:hover:text-dark-active`}
      style={{ position: "relative" }}
      tabIndex="0"
      title={title}
    >
      <div className="flex items-center">
        {Icon && (
          <div className="rounded-full flex justify-center items-center w-8 h-8 bg-white group-hover:border group-hover:bg-light-secondary group-hover:text-active group-hover:border-light-accent transition-colors">
            <Icon style={style} size={size} className="text-lg" />
          </div>
        )}
        {children && (
          <span className="ml-3 text-gray-700 group-hover:text-active transition-colors underline-animation text-sm md:text-auto">
            {children}
          </span>
        )}
      </div>
    </button>
  );
};

export default Social;
