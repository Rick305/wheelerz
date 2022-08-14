import React from 'react';
import { useTranslation } from 'react-i18next';

function Loading () {
  const { t } = useTranslation();

  return (

<div  className="py-20 flex flex-col items-center">
  <div className="item-center">
    <svg className="h-10 w-10 mr-3 rounded-full border-2 border-gray opacity-50 relative top-5" viewBox="0 0 24 24"></svg>
    <svg className="animate-spin h-10 w-10 mr-3 rounded-full border-t-2 border-black relative -top-5" viewBox="0 0 24 24"></svg>
  </div>
  <div className="item-center">{t('processing')}</div>
</div>
  )
}

export default Loading;