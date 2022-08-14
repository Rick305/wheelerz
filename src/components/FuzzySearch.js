import React from 'react';
import { useState } from "react";
import tt from "@tomtom-international/web-sdk-services";
import { useTranslation } from "react-i18next";


function FuzzySearch({text, getPosition}) {

  const { t } = useTranslation();
  const [value, setValue] = useState('')
  const [result, setResult] = useState('');

  const fuzzySearch = (name) => {
    tt.services
      .fuzzySearch({
        key: "edMbjRo98PxkE9xKLYA13VOhwjtU2ZM8",
        query: name
      })
    //   .go()
      .then((res) => {
        const amendRes = res.results;
        setResult(amendRes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  function handleChange(e){
    setValue(e.target.value);
    fuzzySearch(e.target.value)
  }

  function handleKeyDownInput(e) {
    if (e.code === "ArrowDown"){
      e.preventDefault();
      document.activeElement.nextElementSibling.firstChild.focus();
    }
  }

  function handleKeyDownResult(e, lat, lng, address) {
     if (e.key === 'Enter'){
      handleSelect(lat, lng, address)
    } else if (e.code === "ArrowDown"){
      e.preventDefault();
      document.activeElement.nextElementSibling.focus()
    } else if (e.code === "ArrowUp"){
      e.preventDefault();
      document.activeElement.previousElementSibling ? document.activeElement.previousElementSibling.focus() : document.activeElement.parentElement.previousElementSibling.focus()
    }
  }

    function handleSelect(lat, lng, address){
      setValue(address);
      getPosition({lat, lng, text});
      setResult('');
    }

    

  return (
    <div  className="w-80 bg-green rounded-lg mb-9 text-black relative rounded-lg sm:w-96 sm:mr-6">
        <input 
          className=" border-none rounded-lg p-3 h-[3.5rem] w-full focus:outline-none" 
          type="text" 
          value={value} 
          placeholder={t(`${text}`)} 
          onKeyDown={(e) => handleKeyDownInput(e)}
          onChange={(e) => handleChange(e)} 
          required/>

        <ul className="absolute bg-white w-full z-20 rounded-lg">
          { result.length > 0 && (
            result.map((resultItem, index) => (
              <li 
              tabindex="0" 
              className="cursor-pointer px-3 bg-white border-4 border-white rounded-lg hover:bg-gray/25" 
              key={resultItem.id} 
              id={index} 
              onKeyDown={(e) => handleKeyDownResult(e, resultItem.position.lat, resultItem.position.lng, resultItem.address.freeformAddress)}
              onClick={() => handleSelect(resultItem.position.lat, resultItem.position.lng, resultItem.address.freeformAddress)}>
                {resultItem.address.freeformAddress}</li>
            ))
          )}
        </ul>
      </div>
  );
}

export default FuzzySearch;