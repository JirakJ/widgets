import React, { useState } from 'react';
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
    {
        title: "What is React?",
        content: "React is a FE JS Framework"
    },
    {
        title: "Why use React?",
        content: "React is favourite JS lib among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
]

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "React is favourite JS lib among engineers"
    },
    {
        label: "The Color Blue",
        value: "blue"
    }
]

const App = () => {
        const [selected, setSelected] = useState(options[0]);

        return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>);
}

export default App;
