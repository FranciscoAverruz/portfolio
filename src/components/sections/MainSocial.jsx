/* eslint-disable no-unused-vars */
import React from 'react'
import Social from '../layout/Social'
import { RiLinkedinLine } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";

const MainSocial = () => {
  return (
    <div className="flex flex-row gap-2 w-fit">
        <Social
            Icon={RiLinkedinLine}
            to="https://www.linkedin.com/in/franciscoaverruz"
            className={"text-black"}
          >
          </Social>
          <Social
            Icon={LuGithub}
            isCV={false}
            to="https://github.com/FranciscoAverruz"
            className={"text-black"}
          >
          </Social>
    </div>
  )
}

export default MainSocial