'use client';

import Link from 'next/link';
import styles from './CTA.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function CTA() {
    const { t } = useLanguage();

    return (
        <section className={`section ${styles.cta}`}>
            <div className="container">
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{t.cta.title}</h2>
                        <p className={styles.description}>
                            {t.cta.description}
                        </p>
                        <div className={styles.buttons}>
                            <Link href="/contact" className="btn btn-primary">
                                {t.cta.btn_primary}
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a href={`mailto:${t.cta.btn_email}`} className="btn btn-secondary">
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                {t.cta.btn_email}
                            </a>
                        </div>
                    </div>

                    <div className={styles.decoration}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
