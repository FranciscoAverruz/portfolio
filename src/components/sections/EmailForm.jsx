/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { IoIosPerson, IoIosPhonePortrait, IoIosAt } from "react-icons/io";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import useCountries from "@hooks/useCountries.jsx";
import InputField from "@common/InputField.jsx";
import ImageWithLoader from "@common/ImageWithLoader.jsx";
import { FormDataContext } from "@context/FormDataContext.jsx";

const EmailForm = ({ onSubmit }) => {
  const { t, i18n } = useTranslation();
  const {
    countryOptions,
    selectedPrefix,
    setSelectedPrefix,
    defaultCountryName,
    defaultCountryFlag,
  } = useCountries();

  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    message,
    setMessage,
    countryCode,
    setCountryCode,
    countryName,
    setCountryName,
    flag,
    setFlag,
    selectedPrefixCont,
    setSelectedPrefixCont,
  } = useContext(FormDataContext);

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, setErrors] = useState({});
  const inputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "countryCode") {
      const selectedCountry = countryOptions.find(
        (option) => option.code === value
      );
      if (selectedCountry) {
        setSelectedPrefixCont(selectedCountry.prefix);
        const updatedPhone = phone.startsWith(selectedPrefixCont)
          ? phone.replace(selectedPrefixCont, selectedCountry.prefix)
          : `${selectedCountry.prefix}${phone}`;

        setCountryCode(value);
        setPhone(updatedPhone);
        setCountryName(selectedCountry.name);
        setFlag(selectedCountry.flag);

        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    } else {
      if (name === "name") setName(value);
      if (name === "phone") setPhone(value);
      if (name === "email") setEmail(value);
      if (name === "message") setMessage(value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    

    Object.keys({ name, phone, email, message }).forEach((key) => {
      if (key !== "countryName" && !eval(key).trim()) {
        newErrors[key] = t("message.requiredField");
      }
    });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      newErrors.email = t("message.invalidEmail");
    }

    if (phone) {
      const phoneNumber = parsePhoneNumberFromString(phone, countryCode);
      if (!phoneNumber || !phoneNumber.isValid()) {
        newErrors.phone = t("message.invalidPhone");
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setIsSuccess(false);
      return;
    }

    try {
      await onSubmit({ name, phone, email, message, countryName });
      setFeedbackMessage(t("message.sentSuccessfully"));
      setIsSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setCountryCode("ES");
      setCountryName("");
      setFlag("");
      setSelectedPrefixCont("+34");
    } catch (error) {
      setFeedbackMessage(t("message.notSent"));
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    // Updates country and flag if languaje is changed
    const selectedCountry = countryOptions.find(
      (option) => option.code === countryCode
    );

    if (selectedCountry) {
      setCountryName(selectedCountry.name);
      setFlag(selectedCountry.flag);
    }
  }, [i18n.language, countryOptions, countryCode, setCountryName, setFlag]);

  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [feedbackMessage]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full h-full relative"
    >
      {/* ===================================== 1 ===================================== */}
      <section className="w-full flex flex-col md:flex-row gap-2">
        {/* Name  *********************************************************** */}
        <div className="md:w-[70%]">
          <InputField
            label={t("name")}
            name="name"
            type="text"
            required
            onChange={handleChange}
            value={name}
            errorMessage={errors.name}
            className={"mb-2 "}
            icon={<IoIosPerson />}
          />
        </div>

        {/*  Phone  *********************************************************** */}
        <div className="relative mb-2 md:w-[40%]">
          <select
            name="countryCode"
            value={countryCode}
            onChange={handleChange}
            className="absolute left-10 top-7 h-8 z-10 w-4 flex items-center justify-center bg-transparent"
          >
            {countryOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
          <div className="absolute subtitle flex items-start flex-row right-0 text-xs top-1 gap-2 md:w-56 md:justify-end w-56 max-w-56">
            <span className="flex justify-end w-48 max-h-4 overflow-hidden">
              {countryName || defaultCountryName}
            </span>
            <ImageWithLoader
              src={flag || defaultCountryFlag}
              alt="flag"
              className="w-6 h-4 mr-2 aspect-[3/2]"
              loaderClassName="bg-gray-100"
            />
          </div>
          <InputField
            label={t("phone")}
            name="phone"
            type="tel"
            required
            onChange={handleChange}
            value={phone || selectedPrefix}
            errorMessage={errors.phone}
            className={"pl-14 w-full"}
            icon={<IoIosPhonePortrait />}
            inputRef={inputRef}
            inputMode="tel"
            pattern="^\+?[0-9]*$"
          />
        </div>
      </section>
      {/* ===================================== 2 ===================================== */}
      <section className="mt-2 md:mt-auto">
        {/*  Email  *********************************************************** */}
        <InputField
          label={t("email")}
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          errorMessage={errors.email}
          className={""}
          icon={<IoIosAt />}
        />
      </section>
      {/* ===================================== 3 ===================================== */}
      <section className="flex flex-col md:flex-row gap-1 mt-2 w-full">
        {/*  Mesage  *********************************************************** */}
        <div className="w-full h-full">
          <label htmlFor="message" className="labelInput mt-2 md:mt-auto">
            {t("message.msg")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            onChange={handleChange}
            value={message}
            className="h-24 md:h-[73px] inputStyle resize-none"
          ></textarea>
        </div>

        {/*  Feedback message  *********************************************************** */}
        {feedbackMessage && (
          <div
            className={` absolute inset-0 flex items-center justify-center backdrop-blur-md font-bold rounded-md p-5 ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedbackMessage}
          </div>
        )}
      </section>

      <section className="flex justify-end mt-3">
        <button type="submit" className="btnSecondary ">
          {t("send")}
        </button>
      </section>
    </form>
  );
};

export default EmailForm;
