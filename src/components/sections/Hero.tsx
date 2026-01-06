'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        {t.hero.headline}
                    </h1>
                    <p className={styles.subheadline}>
                        {t.hero.subheadline}
                    </p>
                    <div className={styles.ctas}>
                        <Link href="/contact" className="btn btn-primary">
                            {t.hero.cta_primary}
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/portfolio" className="btn btn-secondary">
                            {t.hero.cta_secondary}
                        </Link>
                    </div>
                </div>

                {/* Hero Device Mockup */}
                <div className={styles.deviceMockup}>
                    <Image
                        src="/heromockup.png"
                        alt="Professional web application displayed on laptop"
                        width={1200}
                        height={800}
                        priority
                        className={styles.mockupImage}
                    />
                </div>

            </div>
        </section>
    );
}
