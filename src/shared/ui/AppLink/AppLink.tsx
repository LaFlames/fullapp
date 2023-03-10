import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {Link, LinkProps} from 'react-router-dom';
import {FC} from 'react';

type AppLinkTheme = 'PRIMARY' | 'SECONDARY';
export enum EAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = 'PRIMARY', ...rest} = props;

    return (
        <Link to={to}
            className={classNames(cls.appLink, {}, [className, cls[EAppLinkTheme[theme]]])}
            {...rest}
        >
            {children}
        </Link>
    );
};