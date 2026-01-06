'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Process.module.css';
import { useLanguage } from '@/context/LanguageContext';

const steps = [
    {
        number: '01',
        icon: (
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
        ),
        title: 'Discovery',
        description: 'We dive deep into your business, goals, and audience to build a solid foundation.',
        duration: '1-2 Days',
        deliverable: 'Project Brief',
    },
    {
        number: '02',
        icon: (
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Strategy',
        description: 'We craft a detailed roadmap with technical specs aligned to your objectives.',
        duration: '2-3 Days',
        deliverable: 'Project Roadmap',
    },
    {
        number: '03',
        icon: (
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Design',
        description: 'Stunning visual concepts and interactive prototypes refined to perfection.',
        duration: '1-2 Weeks',
        deliverable: 'UI/UX Designs',
    },
    {
        number: '04',
        icon: (
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'Development',
        description: 'Clean, efficient code following best practices for performance and security.',
        duration: '2-6 Weeks',
        deliverable: 'Working Product',
    },
    {
        number: '05',
        icon: (
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Testing',
        description: 'Rigorous QA across all devices to ensure a flawless user experience.',
        duration: '1 Week',
        deliverable: 'Quality Assurance',
    },
    {
        number: '06',
        icon: (
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
        title: 'Launch & Support',
        description: 'We deploy, train, and support you long after launch to ensure success.',
        duration: 'Ongoing',
        deliverable: 'Live Product',
    },
];

export default function Process() {
    const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.getAttribute('data-index') || '0');
                    if (entry.isIntersecting) {
                        setVisibleSteps((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        stepsRef.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const { t } = useLanguage();

    return (
        <section id="process" className={`section ${styles.process}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">{t.process.title}</span>
                    <h2 className="section-title">{t.process.subtitle}</h2>
                    <p className="section-subtitle">
                        {t.process.subtitle}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${(visibleSteps.length / steps.length) * 100}%` }}
                        />
                    </div>
                    <div className={styles.progressLabels}>
                        <span>Start</span>
                        <span>Launch</span>
                    </div>
                </div>

                <div className={styles.timeline}>
                    {/* Vertical connecting line */}
                    <div className={styles.verticalLine}>
                        <div
                            className={styles.lineFill}
                            style={{ height: `${(visibleSteps.length / steps.length) * 100}%` }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            ref={(el) => { stepsRef.current[index] = el; }}
                            data-index={index}
                            className={`${styles.step} ${index % 2 === 0 ? styles.left : styles.right} ${visibleSteps.includes(index) ? styles.visible : ''}`}
                        >
                            {/* Number badge */}
                            <div className={styles.numberBadge}>
                                <span className={styles.number}>{step.number}</span>
                            </div>

                            {/* Card */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        {step.icon}
                                    </div>
                                    <div className={styles.cardMeta}>
                                        <h3 className={styles.title}>{step.title}</h3>
                                        <span className={styles.deliverable}>{step.deliverable}</span>
                                    </div>
                                </div>
                                <p className={styles.description}>{step.description}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.duration}>
                                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        {step.duration}
                                    </span>
                                    <span className={styles.stepIndicator}>Step {index + 1} of 6</span>
                                </div>
                            </div>

                            {/* Connector line to timeline */}
                            <div className={styles.connector} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
