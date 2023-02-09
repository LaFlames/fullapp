import {classNames} from "shared/lib/classNames/classNames";
import cls from './button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

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