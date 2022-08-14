import { useContext, useEffect, useState } from "react";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";
import React from 'react';

function ChangeLanguage () {
    const { locale } = useContext(LocaleContext);
    const [ bold, setBold ] = useState('');

    function changeLocale (l) {
        if (locale !== l) {
          i18n.changeLanguage(l);
        }
      }

      useEffect(() => {
        if (locale === 'en'){
          setBold('en');
        } else {
          setBold('de');
        }
      }, [locale])


      function handleKeyDown(e, l) {
        if (e.key === 'Enter'){
         changeLocale(l)
       } 
     }

    return(
        <div> 
          <span 
          tabindex="0" 
          className={bold === 'en' ? 'font-bold' : 'font-normal'} 
          onClick={() => changeLocale('en')} 
          onKeyDown={(e) => handleKeyDown(e,'en')}>EN </span> | 

          <span 
          tabindex="0" 
          className={bold === 'de' ? 'font-bold' : 'font-normal'} 
          onClick={() => changeLocale('de')} 
          onKeyDown={(e) => handleKeyDown(e,'de')}>  DE</span>
        </div>
    )
}

export default ChangeLanguage;
