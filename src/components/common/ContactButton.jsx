/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ContactButton = ({ children, className, Icon, to, onClick, style, title }) => {
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
      style={{ position: "relative" }}
      title={title}
      tabIndex="0"
    >
      {Icon && (
        <div className="flex-shrink-0">
          <Icon
            style={style}
            className="text-lg lg:text-2xl hover:font-extrabold drop-shadow-md"
          />
        </div>
      )}
      <span className="hidden md:block">{children}</span>
    </button>
  );
};

export default ContactButton;
