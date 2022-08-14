import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Icon from './Icon';
import Orange from './Orange';

function ArgumentsBike({distance, calories, money, co2}) {
    const { t } = useTranslation();

    return (
        <div className="text-2xl">
            <h1 className="h1-results text-center text-5xl leading-normal p-5 lg:text-6xl">{t('title')}</h1>

            <div className="icons flex justify-around py-5">
                <Icon icon={'faWallet'} amount={money} unit={'euro'}/>
                <Icon icon={'faSeeding'} amount={calories} unit={'gram'}/>
                <Icon icon={'faIceCream'} amount={co2} unit={'cal'}/>
            </div>

            <div className="text-base leading-7 p-5 sm:px-0 text-justify">    
            <Trans i18nKey="text" >
                Taking the bike is good for the environment, your health but also for your wallet! For this 
                <Orange string={`${distance.toString().replaceAll('.', ',')} km`}>{{distance}}</Orange> bike ride you will burn 
                <Orange string={`${calories}`}>{{calories}}</Orange>. And because you bikes dont have polution 
                <Orange string={`${co2}g `}>{{co2}}</Orange>less CO2. On top of that you will save 
                <span className='font-bold text-orange'>€ {{money}}!</span>
            </Trans>
            </div>
                
            </div>
    )
}
export default ArgumentsBike;

          