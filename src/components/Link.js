import React from 'react';

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        //This will communicate over route component that route just change
        const navigationEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navigationEvent);

    }
    return (
        <a
            onClick={onClick}
            className={className}
            href={href}>
                {children}
        </a>
    )
};

export default Link;
