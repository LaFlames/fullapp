import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const {t} = useTranslation();

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
            >
                {t('Toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};


