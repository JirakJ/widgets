import React, { useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const renderedOptions = options.filter(f => f !== selected).map((option) => {
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
      <div className="ui form">
          <div className="field">
              <label className="label">Select a color</label>
              <div
                  onClick={() => setOpen(!open)}
                  className={`ui selection dropdown ${open ? 'visible active' : ''}`}
              >
                  <i className="dropdown icon"></i>
                  <div className="text">{selected.label}</div>
                  <div className={`menu ${open ? 'visible transition':''}`}>
                      {renderedOptions}
                  </div>
              </div>
          </div>
      </div>
    );
}

Dropdown.defaultProps = {
    label: "Select"
}

export default Dropdown;
