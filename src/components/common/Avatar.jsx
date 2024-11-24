/* eslint-disable no-unused-vars */
import React from 'react';
import ImageWithLoader from "@common/ImageWithLoader";

const Avatar = () => {
  const imageUrl = import.meta.env.VITE_AVATAR_URL;

  return (
    <div>
      <ImageWithLoader
        className="flex-shrink-0 h-28 w-28 md:h-40 md:w-40"
        imgClassName="rounded-full object-cover border-white border-2 drop-shadow-xl bg-light-background dark:bg-dark-background"
        src={imageUrl}
        alt="main image"
        fetchpriority="high"
        loading="eager"
        aspectRatio="1/1"
      />

    </div>
  );
};

export default Avatar;
