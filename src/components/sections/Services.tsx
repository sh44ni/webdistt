'use client';

import styles from './Services.module.css';
import { useLanguage } from '@/context/LanguageContext';

const icons = {
    web: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
    ),
    software: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    app: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
    ),
    design: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="13.5" cy="6.5" r="2.5" />
            <path d="M17 3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3z" />
        </svg>
    ),
    marketing: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
    ),
    support: (
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
};

const serviceKeys = ['web', 'app', 'software', 'design', 'marketing', 'support'] as const;

export default function Services() {
    const { t } = useLanguage();

    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">{t.services.title}</span>
                    <h2 className="section-title">{t.services.subtitle}</h2>
                    <p className="section-subtitle">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className={styles.grid}>
                    {serviceKeys.map((key, index) => {
                        const service = t.services.items[key];
                        return (
                            <div
                                key={key}
                                className={`glass-card ${styles.card}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.icon}>{icons[key]}</div>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.description}>{service.description}</p>
                                <ul className={styles.features}>
                                    {service.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
