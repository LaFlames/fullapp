import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {Button} from 'shared/ui/Button/Button';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {RoutePaths} from 'shared/config/routeConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = React.useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme="BACKGROUND_INVERTED"
                size="L"
                square
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.links}>
                <AppLink theme="SECONDARY" to={RoutePaths.main } className={cls.linkItem}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>{t('Main')}</span>
                </AppLink>
                <AppLink theme="SECONDARY" to={RoutePaths.about} className={cls.linkItem}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t('About')}</span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher isShortTitle={collapsed}/>
            </div>
        </div>
    );
};


