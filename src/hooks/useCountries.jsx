import { useEffect, useState, useContext } from "react";
import axios from "axios";
import LanguageContext from "@context/LanguageContext.jsx";

const languageMap = {
  en: "eng",
  es: "spa",
  pt: "por",
};

const dCountry = "ES";

const useCountries = () => {
  const { language } = useContext(LanguageContext);
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedPrefix, setSelectedPrefix] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [defaultCountryName, setDefaultCountryName] = useState("");
  const [defaultCountryFlag, setDefaultCountryFlag] = useState("");

  const urlApi = import.meta.env.VITE_COUNTRIES_URL;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(urlApi);
        setResponseData(response.data);
        console.log("response == ", response);

        const apiLanguage = languageMap[language] || "eng";

        const options = response.data.map((country) => {
          const idd = country.idd || {};
          const suffixes = idd.suffixes || [];
          const root = idd.root || "";
          const flag = country.flags.png;
          let prefix = "";

          if (suffixes.length === 1) {
            // general Case: just one suffix
            prefix = `${root}${suffixes[0]}`;
          } else if (country.cca2 === "US" || country.cca2 === "RU") {
            // especial Case for USA o RU
            prefix = root;
          } else if (country.cca2 === "VA") {
            // especial Case for The Vatican city
            prefix = `${root}${suffixes[1]}`;
          } else if (country.cca2 === "EH") {
            // especial Case for Western Sahara
            prefix = `${root}12`;
          } else {
            // Other cases: first element i the chosen one
            prefix = `${root}${suffixes[0]}`;
          }

          const commonName =
            language === "en"
              ? country.name.common
              : country.translations[apiLanguage]?.common ||
                country.name.common;

          return {
            code: country.cca2,
            nameWithCode: `(${prefix}) ${commonName}`,
            commonName,
            prefix,
            flag,
          };
        });

        options.sort((a, b) => a.commonName.localeCompare(b.commonName));
        const formattedOptions = options.map((option) => ({
          code: option.code,
          name: option.nameWithCode,
          prefix: option.prefix,
          flag: option.flag,
        }));

        setCountryOptions(formattedOptions);

        const defaultCountryName = options.find(
          (option) => option.code === dCountry
        );
        setDefaultCountryName(
          defaultCountryName ? defaultCountryName.commonName : ""
        );

        const defaultCountryFlag = options.find(
          (option) => option.code === dCountry
        );
        setDefaultCountryFlag(
          defaultCountryFlag ? defaultCountryFlag.flag : ""
        );

        const defaultCountry = formattedOptions.find(
          (opt) => opt.code === dCountry
        );
        if (defaultCountry) setSelectedPrefix(defaultCountry.prefix);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [urlApi, language]);

  return {
    countryOptions,
    selectedPrefix,
    setSelectedPrefix,
    responseData,
    defaultCountryName,
    defaultCountryFlag,
  };
};

export default useCountries;
