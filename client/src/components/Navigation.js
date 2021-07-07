import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className='navigation' 
        data-testid='navTest'>
            <h1 className='titleNav'>Player List</h1>
            <div className='dark-mode__toggle'>
                <div 
                data-testid='toggleTest'
                onClick={toggleMode} 
                className={darkMode ? 'toggle toggled' : 'toggle'} 
                />
            </div>
        </nav>
    );
};

export default Navigation;