/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const Tech = lazy(() => import('@layout/Tech.jsx'));

  return (
    <Suspense fallback={<div>Loading Tech...</div>}>
    <div className='mt-10'>
        <p className='paragraph'>{t('aText.aT1')}
          <strong>{t('aText.aT2')}</strong>
          {t('aText.aT3')}
          <strong>(SCRUM)</strong>
          {t('aText.aT4')}
        </p>
        <p className='my-5 paragraph'>{t('aText.aT5')}</p>
      <Suspense fallback={<div>Loading Tech...</div>}>
        <div className='w-full'>
          <Tech />
        </div>
      </Suspense>
    </div>
    </Suspense>
  )
}


export default About;

