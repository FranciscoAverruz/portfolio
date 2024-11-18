/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ImageWithLoader = ({
  src,
  alt,
  className,
  loaderClassName,
  imgClassName,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`} {...props}>
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center ${loaderClassName}`}
        >
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
};

export default ImageWithLoader;
