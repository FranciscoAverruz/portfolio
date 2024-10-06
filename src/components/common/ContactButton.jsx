/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ContactButton = ({ children, className, Icon, to, onClick }) => {
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
      className={`btnStyle focusBtn ${className} flex w-full h-full items-center text-sm focus:outline-none`}
      style={{ position: 'relative' }}
      tabIndex="0"
    >
      <span>{children}</span>
      {Icon && (
        <div className="flex-shrink-0">
          <Icon className="text-lg lg:text-2xl hover:font-extrabold" />
        </div>
      )}
    </button>
  );
};

export default ContactButton;
