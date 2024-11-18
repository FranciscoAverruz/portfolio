/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";
import Tech from '@layout/Tech.jsx';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-10'>
        <p className='paragraph'>{t('aText.aT1')}
          <strong>{t('aText.aT2')}</strong>
          {t('aText.aT3')}
          <strong>(SCRUM)</strong>
          {t('aText.aT4')}
        </p>
        <p className='my-5 paragraph'>{t('aText.aT5')}</p>
        <div className='w-full'>
          <Tech />
        </div>
    </div>
  )
}

export default About;

