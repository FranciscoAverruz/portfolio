import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from '@src/App.jsx'
import '@src/index.css'
import '@src/i18n';
import  { LanguageProvider }  from '@context/LanguageContext.jsx';
import {FormDataProvider} from '@context/FormDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <FormDataProvider>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
    </FormDataProvider>
  </React.StrictMode>,
)
