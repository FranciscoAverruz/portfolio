/* eslint-disable no-unused-vars */
import React from 'react'
import ThemeSwitch from '@common/ThemeSwitch.jsx'
import LanguageSwitcher from '@common/LanguageSwitcher.jsx'

const ThLang = () => {
  return (
    <div className='flex flex-row gap-1'>
        <ThemeSwitch />
        <LanguageSwitcher />
    </div>
  )
}

export default ThLang