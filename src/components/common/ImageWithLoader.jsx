/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ImageWithLoader = ({
  src,
  alt,
  className,
  loaderClassName,
  imgClassName,
  aspectRatio = "16/9",
  fetchpriority,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`} style={{ aspectRatio }} {...props}>
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center ${loaderClassName}`}
        >
          <div className="z-50 w-5 h-5 border-4 border-light-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        className={`object-cover ${imgClassName}`}
        loading="eager"
        fetchpriority={fetchpriority || "high"}
      />
    </div>
  );
};

export default ImageWithLoader;
