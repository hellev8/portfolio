// src/utils/translations/i18n.js
import en from './en';
import it from './it';

const translations = { en, it };

export const getTranslation = (key, lang = 'en') => {
    return translations[lang][key] || key;
};
