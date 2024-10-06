/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className='h1'>{t('projectsNav')}</h1>
        <p>{t('')}</p>
        <p className='mb-5'>{t('')}</p>
        <p>{t('')}</p>
    </div>
  )
}

export default Projects