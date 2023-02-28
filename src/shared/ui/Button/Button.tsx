import {classNames} from 'shared/lib/classNames/classNames';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore, will fix it later
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, theme, children, ...rest} = props;

    return (
        <button
            {...rest}
            className={classNames(cls.button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};