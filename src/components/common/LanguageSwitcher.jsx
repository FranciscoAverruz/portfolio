/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Menu, MenuButton } from "@headlessui/react";
import es from "@imgLanguage/es.webp";
import pt from "@imgLanguage/pt.webp";
import usagb from "@imgLanguage/usagb.webp";

import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageContext from "@context/LanguageContext";
import { useTranslation } from "react-i18next";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 18 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.1 } },
};

const listVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const languages = [
  { code: "es", name: "Español", icon: es },
  { code: "en", name: "English", icon: usagb },
  { code: "pt", name: "Português", icon: pt },
];

const LanguageSwitcher = () => {
  const { changeLanguage, currentLanguage } = useContext(LanguageContext);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || currentLanguage;
    const initialLanguage =
      languages.find((lang) => lang.code === savedLanguage) || languages[0];
    setSelectedLanguage(initialLanguage);
    changeLanguage(initialLanguage.code);
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    changeLanguage(language.code);
    localStorage.setItem("language", language.code);
    setIsOpen(false);
  };

  return (
    <Menu as="div" className="relative inline-block text-left" role="menu">
      <div>
        <MenuButton
          onClick={() => setIsOpen(!isOpen)}
          className="flex bg-white dark:bg-[#5b5a5a] w-8 h-8 rounded-full shadow-md items-center justify-center hover:border hover:border-light-accent font-semibold text-xl"
          aria-label={t('langSwitcher.changeLanguage', { language: selectedLanguage.name })}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
          id="menu-button"
        >
          <img
            src={selectedLanguage.icon}
            alt={t('langSwitcher.flagAlt', { language: selectedLanguage.name })}
            className="w-6 h-6"
          />
        </MenuButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={listVariants}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-light-background dark:bg-dark-background dark:text-white shadow-md w-28"
            role="menu"
            aria-labelledby="menu-button"
          >
            {languages.map((language) => (
              <motion.li
                key={language.code}
                variants={itemVariants}
                role="menuitem"
                className="hover:bg-light-primary hover:text-light-accent dark:hover:bg-dark-neutral group flex w-full items-center rounded-md px-2 py-2 text-sm"
              >
                <button
                  onClick={() => handleLanguageChange(language)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleLanguageChange(language);
                    }
                  }}
                  className="flex items-center w-full"
                  tabIndex="0"
                  aria-label={t('langSwitcher.flagAlt', { language: language.name })}
                >
                  <img
                    src={language.icon}
                    alt={t('langSwitcher.flagAlt', { language: language.name })}
                    className="rounded-full w-4 h-4 mr-2"
                  />
                  {language.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </Menu>
  );
};

export default LanguageSwitcher;
