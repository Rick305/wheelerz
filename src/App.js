import { useState } from "react";
import LocaleContext from "./LocaleContext";
import i18n from './i18n';
import React from 'react'
import Search from "./components/Search";
import Result from "./components/Result";
import ChangeLanguage from "./components/ChangeLanguage";

function App() {
  // //Settings for i18n
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const [showHome, setShowHome] = useState(true); //Toggle which page is shown
  const [location, setLocation] = useState(''); // Loacation from where to where

  //function passed on to child (Search) to get data of loaction and to toggle between the pages
  const getLocation = childata => {
    setLocation(childata);
    setShowHome(false); 
  }

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
        <div className="App">
        
          <div className="absolute z-10 right-4 top-2 cursor-pointer"><ChangeLanguage/></div>

          {/* Search page */}
          <div className={showHome ? 'block' : 'hidden'}>
            <div className="home bg-green min-h-screen min-w-full relative ">
              <h1 className="home-title cursor-default text-center text-beige text-8xl font-black max-w-md mx-auto py-10 -rotate-2">
                I Want To Ride My <span className="text-orange" style={{textShadow: "-5px 5px black"}} >Bicycle</span> 
              </h1>
              <Search getLocation={getLocation}/>
            </div>
          </div>

          {/* Result page */}
          <div className={showHome ? 'hidden' : 'block mx-auto'}>
            <div className="home min-h-screen min-w-screen bg-beige flex flex-col items-center justify-center ">
              <Result location={location} />
            </div>
          </div>
        </div>
    </LocaleContext.Provider>
  );
}

export default App;
