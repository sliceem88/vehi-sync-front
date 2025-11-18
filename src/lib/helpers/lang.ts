export const DEFAULT_LANG_CODE = 'en';
export const getUrlWithLang = (url: string, lang = DEFAULT_LANG_CODE) => `/${lang}${url}`;

// Client function
// TODO: Redo as Hook
export const getLocale = () => {
    if (window) {
        const pathname = window.location.pathname;
        const segments = pathname.split('/').filter(Boolean);

        return segments.shift() ?? DEFAULT_LANG_CODE;
    }

    return DEFAULT_LANG_CODE;
};

export const locales = [DEFAULT_LANG_CODE, 'ru'] as const;