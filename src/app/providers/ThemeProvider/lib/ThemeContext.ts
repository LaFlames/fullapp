import {createContext} from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContext {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';