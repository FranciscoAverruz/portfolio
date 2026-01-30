/* eslint-disable no-unused-vars */
// src/components/Contact.js
import React from "react";
import { useTranslation } from "react-i18next";
import Avatar from "@common/Avatar.jsx";
import EmailForm from "@sections/EmailForm.jsx";
import axios from "axios";
import MainContactBtn from "@sections/MainContactBtn.jsx";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const handleEmailSubmit = async (formData) => {
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, formData);
      return response;
    } catch (error) {
      if (error.response?.data) {
        throw new Error(error.response.data);
      }
      throw new Error("Error sending the message");
    }
  };

  return (
    <div className="h-[50%] mt-5">
      <div className="md:w-[90vw] lg:w-auto grid grid-cols-1 lg:grid-cols-4 grid-rows-[auto_1fr] lg:grid-rows-1 h-full p-2 md:p-0 rounded-xl">
        <div className="flex justify-center w-full h-full flex-col p-5 md:p-2 md:hidden lg:flex items-center gap-3 lg:border-r-2 lg:dark:border-r-dark-primary ">
          <Avatar />
          <span
            className="w-full flex justify-center text-3xl font-semibold dark:font-normal text-light-txt text-light-title dark:text-dark-title my-5 md:my-auto lg:my-5"
            style={{ fontFamily: "Satisfy, cursive" }}
          >
            {" "}
            Francisco Averruz{" "}
          </span>
          <p className="paragraph text-center md:text-left lg:text-center md:px-5 w-full">
            {t("profession")}
          </p>
        </div>

        <div className="p-0 md:p-8 lg:p-6 xl:p-5 flex flex-col-reverse md:flex-col justify-center items-center w-full h-full col-span-3">
          <div className="w-full h-full">
            <h1 className="flex title mb-4 justify-start tracking-tight">
              {t("contactFormLabel")}
            </h1>
            <div className="w-full px-0 md:px-2">
              <EmailForm onSubmit={handleEmailSubmit} />
            </div>
          </div>
          <div className="flex justify-center items-center w-full md:block mb-5 md:mb-0">
            <span
              className={`${
                isContactPage
                  ? "md:block w-full flex title mt-4 tracking-tight"
                  : "lg:hidden"
              } hidden`}
            >
              {t("xtraContactLabel")}
            </span>
            <MainContactBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
