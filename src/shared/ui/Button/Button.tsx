import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from 'react';

type ButtonTheme = 'CLEAR' | 'OUTLINE' | 'BACKGROUND' | 'BACKGROUND_INVERTED';
enum EButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

type ButtonSize = 'M' | 'L' | 'XL';
enum EButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, theme, square, size = 'M', children, ...rest} = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[EButtonSize[size]]]: square,
    };

    return (
        <button
            {...rest}
            className={classNames(cls.button, mods, [className, cls[EButtonTheme[theme]]])}
        >
            {children}
        </button>
    );
};