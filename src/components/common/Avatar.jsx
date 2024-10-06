/* eslint-disable no-unused-vars */
import React from 'react'
import FranciscoAverruz from '../../assets/images/FranciscoAverruz.jpg'

const Avatar = () => {
  return (
    <div>
        <img
          className="h-28 w-28 md:h-40 md:w-40 rounded-full bg-contain border-white border-2 drop-shadow-xl bg-black bg-opacity-light" 
          src={FranciscoAverruz}
          alt="perfil"
        /> 
    </div>
  )
}

export default Avatar