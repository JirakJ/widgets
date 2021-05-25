import React, { useState, useEffect } from 'react';
import wikipedia from "../api/wikipedia";

const Search = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    useEffect(() => {
        const search = async () => {
            const response = await wikipedia.get("", { params: { srsearch: input } });
            setResults(response.data.query.search);
        };

        if(input && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if(input) {
                    search();
                }
            }, 500);
            return () => clearTimeout(timeoutId);
        }
    },[input])

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Show more
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        )
    })

    return <div className="search-bar ui segment">
        <form className="ui form" onSubmit={(event) => event.preventDefault()}>
            <label>Search</label>
            <input type="text" onChange={onInputChange}/>
        </form>
        <div className="ui celled list">
            {renderedResults}
        </div>
    </div>;
}

export default Search;
