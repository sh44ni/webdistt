'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './About.module.css';
import { useLanguage } from '@/context/LanguageContext';

const stats = [
    { number: 150, suffix: '+', label: 'Projects Delivered' },
    { number: 8, suffix: '+', label: 'Years Experience' },
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 24, suffix: '/7', label: 'Support Available' },
];

const keyPoints = [
    'Bilingual Team (Arabic & English)',
    'Agile Development Methodology',
    'Transparent Communication',
    'Post-Launch Support Included',
    'Competitive Pricing',
    'On-Time Delivery',
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);

                    const animate = () => {
                        start += increment;
                        if (start < target) {
                            setCount(Math.floor(start));
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };
                    animate();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref} className={styles.statNumber}>
            {count}{suffix}
        </span>
    );
}

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.statsContainer}>
                        <div className={`glass-card ${styles.statsCard}`}>
                            {stats.map((stat) => (
                                <div key={stat.label} className={styles.stat}>
                                    <Counter target={stat.number} suffix={stat.suffix} />
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.content}>
                        <span className="section-label">{t.about.label}</span>
                        <h2 className={styles.title}>{t.about.title}</h2>

                        <div className={styles.description}>
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                            <p>{t.about.p3}</p>
                        </div>

                        <ul className={styles.keyPoints}>
                            {keyPoints.map((point) => (
                                <li key={point}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <Link href="/about" className="btn btn-primary">
                            {t.about.cta}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
