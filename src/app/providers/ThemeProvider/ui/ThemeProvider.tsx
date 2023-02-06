import React from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || "light";

const ThemeProvider: React.FC = ({children}) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme)

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;