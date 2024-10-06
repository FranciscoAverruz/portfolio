/* eslint-disable no-unused-vars */
import React from 'react'
import ThemeSwitch from '../common/ThemeSwitch'
import LanguageSwitcher from '../common/LanguageSwitcher'

const ThLang = () => {
  return (
    <div className='flex flex-row gap-2'>
        <ThemeSwitch />
        <LanguageSwitcher />
    </div>
  )
}

export default ThLang