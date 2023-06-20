import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css'

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage( (lang) => {
      console.log("lang ==> " , lang);
      if (lang.id === "EN") setLanguage(languages.brazilian_portuguese);
      if (lang.id === "PTBR") setLanguage(languages.spanish);
      if (lang.id === "ES") setLanguage(languages.ukranian);
      if (lang.id === "UKUA") setLanguage(languages.italian);
      if (lang.id === "IT") setLanguage(languages.chinese);
      if (lang.id === "CN") setLanguage(languages.japanese);
      if (lang.id === "JP") setLanguage(languages.english);
    });
  }

  return (
    <div className="App">
      <LanguageContext.Provider value={ {language, handleChangeLA}}>{/*  DICA: Adicione o provider LanguageContext */}
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  )
}

export default App