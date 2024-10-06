/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";
import Tech from '../components/sections/Tech';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className='h1'>{t('aboutNav')}</h1>
        <p>{t('aText.aT1')}</p>
        <p className='mb-5'>{t('aText.aT2')}</p>
        <Tech />
        <p>{t('aText.aT3')}</p>
    </div>
  )
}

export default About;

