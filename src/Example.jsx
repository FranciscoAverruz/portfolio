/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';

const Example = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4">
      <h1>{t('greeting')}</h1>
      <br /><br />
      <button onClick={() => changeLanguage('es')}>ES</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('pt')}>PT</button>
    </div>
  );

};

export default Example;