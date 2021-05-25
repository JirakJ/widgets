import React, { useState } from 'react';
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

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
        const [showDropdown, setShowDropdown] = useState(true);
        return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            <Accordion items={items}/>
            <Search/>
            { showDropdown && <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />}
            <Translate />
        </div>);
}

export default App;
