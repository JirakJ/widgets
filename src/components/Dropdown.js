import React, { useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    //fix onClick={() => setOpen(!open)} for React v17
    // [] -> this makes it run only one time as init
    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };
    }, []);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setOpen(false);
        },
            {capture: true});
    }, [])

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
      <div className="ui form" ref={ref}>
          <div className="field">
              <label className="label">{label}</label>
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
