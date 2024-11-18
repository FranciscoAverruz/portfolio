/* eslint-disable no-unused-vars */
import React from 'react';
import FranciscoAverruz from '@images/FranciscoAverruz.jpg';
import ImageWithLoader from "@common/ImageWithLoader";

const Avatar = () => {
  return (
    <div>
      <ImageWithLoader
        className="flex-shrink-0 h-28 w-28 md:h-40 md:w-40"
        imgClassName="rounded-full object-cover border-white border-2 drop-shadow-xl"
        src={FranciscoAverruz}
        alt="FranciscoAverruz"
      />

    </div>
  );
};

export default Avatar;
