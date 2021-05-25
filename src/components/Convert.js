import React, { useState, useEffect } from 'react';
import google from "../api/google";

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState("");
    const [debounceText, setDebounceText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceText(text);
        },500);

        return () => {
            clearTimeout(timerId);
        }
    })

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await google.post('',
                {},
                {
                    params: {
                        q: debounceText,
                        target: language.value
                    }
                });

            //data (axios). data (from response)
            setTranslated(data.data.translations[0].translatedText)
        }



        doTranslation();
    }, [language, debounceText])

    return (
        <div>
            <h1 className={'ui header'}>{translated}</h1>
        </div>
    )
};

export default Convert;