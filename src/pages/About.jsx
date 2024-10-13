/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";
import Tech from '../components/sections/Tech';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className='title'>{t('aboutNav')}</h1>
        <p className='paragraph'>{t('aText.aT1')}</p>
        <p className='mb-5 paragraph'>{t('aText.aT2')}</p>
        <Tech />
        <p className='paragraph'>{t('aText.aT3')}</p>
    </div>
  )
}

export default About;

