/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Social = ({ children, className, Icon, to, onClick }) => {
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
      className={`${className} bg-white p-3 flex w-8 h-8 justify-center items-center text-sm focus:outline-none rounded-full`}
      style={{ position: 'relative' }}
      tabIndex="0"
    >
      <span>{children}</span>
      {Icon && (
        <div className="flex-shrink-0">
          <Icon className="flex text-lg hover:font-extrabold justify-center" />
        </div>
      )}
    </button>
  );
};

export default Social;
