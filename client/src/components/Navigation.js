import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(darkMode !== 'dark' ? 'dark':'standard');
    };
    return (
        <nav className='navigation'>
            <h1>Players:</h1>
            <div className='dark-mode_toggle'>
                <div 
                onClick={toggleMode} className={darkMode === 'dark' ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    );
};

export default Navigation;