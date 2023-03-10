import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    isShortTitle?: boolean;
}

export const LangSwitcher = ({className, isShortTitle}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru' );
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            theme="CLEAR"
            onClick={toggleLang}
        >
            {t(isShortTitle ? 'Short language' : 'Language')}
        </Button>
    );
};