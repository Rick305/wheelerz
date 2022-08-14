import React from 'react';
import FuzzySearch from "./FuzzySearch";
import { useState } from "react";
import { useTranslation } from "react-i18next";


function Search({getLocation}) {

  const { t } = useTranslation();

  const [startLatitude, setStartLatitude] = useState("");
  const [startLongitude, setStartLongitude] = useState("");
  const [destinationLatitude, setDestinationLatitude] = useState("");
  const [destinationLongitude, setDestinationLongitude] = useState("");

  const getPosition = childdata => {
    if(childdata.text === 'from'){
    setStartLatitude(childdata.lng);
    setStartLongitude(childdata.lat);
  } else {
    setDestinationLatitude(childdata.lng);
    setDestinationLongitude(childdata.lat);
    }
  }

  //Pass data to parent component (App.js)
  function handleClick (){
    getLocation({slat:startLatitude, slng:startLongitude, dlat:destinationLatitude, dlng:destinationLongitude});
  }

  return (
    <div className="search-component flex justify-center pt-12">
      <div className="lg:flex">
        <FuzzySearch text={'from'} getPosition={getPosition} />
        <FuzzySearch text={'to'} getPosition={getPosition} />

        <button 
          className="search-bttnn h-[3.5rem] bg-orange text-beige rounded-lg text-lg cursor-pointer mb-9 px-6 hover:bg-beige hover:text-green" 
          onClick={() => handleClick()}>
            {t('convince')}
        </button>

      </div>
    </div>
  );
}

export default Search;