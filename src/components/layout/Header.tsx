'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const { t, language, toggleLanguage } = useLanguage();

    const navLinks = [
        { href: '/', label: t.header.nav.home },
        { href: '/services', label: t.header.nav.services },
        { href: '/portfolio', label: t.header.nav.portfolio },
        { href: '/about', label: t.header.nav.about },
        { href: '/contact', label: t.header.nav.contact },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use appropriate logo based on theme
    const logoSrc = theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg';

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={logoSrc}
                        alt="Web Distt"
                        width={160}
                        height={48}
                        priority
                    />
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={styles.navLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Actions (Visible only inside hamburger menu) */}
                    <div className={styles.mobileActions}>
                        <button
                            className={styles.langSwitch}
                            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span className={styles.langText}>{language === 'en' ? 'AR' : 'EN'}</span>
                        </button>
                        <ThemeToggle />
                    </div>
                </nav>

                <div className={styles.actions}>
                    {/* Language Switch */}
                    <button
                        className={styles.langSwitch}
                        onClick={toggleLanguage}
                        title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                    >
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span className={styles.langText}>{language === 'en' ? 'AR' : 'EN'}</span>
                    </button>
                    <ThemeToggle />
                    <Link href="/contact" className={styles.ctaButton}>
                        {t.header.cta}
                    </Link>
                </div>

                <button
                    className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
