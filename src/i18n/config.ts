// src/i18n.ts
export const locales = ['en', 'ar'];
export const defaultLocale = 'en';

const dictionaries: any = {
    en: () => import('@/messages/en.json').then((m) => m.default),
    ar: () => import('@/messages/ar.json').then((m) => m.default),
};

export const getDictionary = async (locale: string) =>
    dictionaries[locale]();