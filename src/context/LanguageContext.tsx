'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '@/translations/en';
import { ar } from '@/translations/ar';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
    language: Language;
    direction: Direction;
    t: typeof en;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { en, ar };

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, direction, t, setLanguage, toggleLanguage }}>
            <div dir={direction} lang={language}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
