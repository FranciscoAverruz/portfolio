/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const Tech = lazy(() => import('@layout/Tech.jsx'));

  return (
    <Suspense fallback={<div>Loading Tech...</div>}>
      <div className='mt-10'>
        <p className='paragraph'>
          <strong>{t('aText.aT1')}</strong>{" "}
          {t('aText.aT2').split('stack MERN').map((part, i, arr) => (
            <>
              {i > 0 && <strong>stack MERN</strong>}
              {part}
            </>
          ))}{" "}
          {t('aText.aT3')} <strong>(Scrum) </strong>
          {t('aText.aT4')}
        </p>

        <p className='mt-5 xl:mt-10 paragraph'>{t('aText.aT5')}</p>

        <div className='w-full md:block xl:fixed xl:bottom-0 xl:left-0 xl:right-0 p-3 xl:p-9'>
          <Tech />
        </div>
      </div>
    </Suspense>
  );
};

export default About;