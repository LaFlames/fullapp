import {classNames} from 'shared/lib/classNames/classNames';
import React from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button} from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme,  toggleTheme} = useTheme();

    return (
        <Button
            theme="CLEAR"
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === 'dark' ? <DarkIcon /> :  <LightIcon />}
        </Button>
    );
};