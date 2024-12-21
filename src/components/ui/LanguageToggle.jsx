import { useTranslation } from 'react-i18next';
import { languages } from '../../constants/languages';

export default function LanguageToggle() {
    const { i18n } = useTranslation();
  
    const changeLanguage = (code) => {
      i18n.changeLanguage(code);
    };
  
    return (
      <div className="flex gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-2 py-1 ${
              i18n.language === lang.code ? 'text-sky-600 dark:text-teal-400' : 'text-sky-900 dark:text-gray-200'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    );
  }