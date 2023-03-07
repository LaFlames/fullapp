import React from 'react';
import {useTranslation} from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';
import  cls from './ErrorPage.module.scss';

export const ErrorPage = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [])}>
            <p>{t('Something went wrong')}</p>
            <Button onClick={reloadPage}>
                {t('Reload page')}
            </Button>
        </div>
    );
};