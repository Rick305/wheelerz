import React from 'react';
import { useTranslation } from "react-i18next";

function Error(props) {
    const { t } = useTranslation('');
    console.log(props.err)

    return (
        <div className="err pt-32 pb-6">
            <h2 className="text-4xl font-extrabold text-orange py-6">{t('error')}</h2>
            <p>{props.error.message}</p>
        </div>
    )
}

export default Error;