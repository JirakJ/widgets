import React, { useState, useEffect } from 'react';
import google from "../api/google";

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState("");

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await google.post('',
                {},
                {
                    params: {
                        q: text,
                        target: language.value
                    }
                });

            //data (axios). data (from response)
            setTranslated(data.data.translations[0].translatedText)
        }



        doTranslation();
    }, [language, text])

    return (
        <div>
            <h1 className={'ui header'}>{translated}</h1>
        </div>
    )
};

export default Convert;