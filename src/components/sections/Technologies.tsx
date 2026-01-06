'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Technologies.module.css';
import { useLanguage } from '@/context/LanguageContext';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, SiJavascript,
    SiNodedotjs, SiPython, SiDjango, SiPostgresql, SiMongodb, SiPhp, SiLaravel,
    SiAmazonwebservices, SiDocker, SiGit, SiFigma, SiVercel, SiDigitalocean, SiFlutter
} from 'react-icons/si';

// Tech icons organized by rings
const rings = {
    inner: [
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', Icon: SiNextdotjs, color: 'currentColor' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    ],
    middle: [
        { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
        { name: 'Python', Icon: SiPython, color: '#3776AB' },
        { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
        { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
        { name: 'Django', Icon: SiDjango, color: '#092E20' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    ],
    outer: [
        { name: 'AWS', Icon: SiAmazonwebservices, color: '#FF9900' },
        { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
        { name: 'Git', Icon: SiGit, color: '#F05032' },
        { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
        { name: 'Vercel', Icon: SiVercel, color: 'currentColor' },
        { name: 'DigitalOcean', Icon: SiDigitalocean, color: '#0080FF' },
        { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    ],
};

export default function Technologies() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollRotation, setScrollRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how much the section is visible
            const visibleTop = Math.max(0, windowHeight - rect.top);
            const visibleBottom = Math.max(0, rect.bottom);
            const totalVisible = Math.min(visibleTop, visibleBottom, rect.height);

            // Convert scroll position to rotation (0-180 degrees as you scroll through)
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
            setScrollRotation(scrollProgress * 180);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate icon position with scroll rotation
    const getIconPosition = (index: number, total: number, radius: number, ringOffset: number) => {
        const baseAngle = (360 / total) * index - 90;
        const rotatedAngle = baseAngle + scrollRotation * ringOffset;
        const x = Math.cos((rotatedAngle * Math.PI) / 180) * radius;
        const y = Math.sin((rotatedAngle * Math.PI) / 180) * radius;
        return { x, y };
    };

    return (
        <section id="technologies" className={`section ${styles.technologies}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">{t.technologies.title}</span>
                    <h2 className="section-title">{t.technologies.subtitle}</h2>
                    <p className="section-subtitle">
                        {t.technologies.description}
                    </p>
                </div>

                <div ref={containerRef} className={styles.diagram}>
                    {/* Ring lines */}
                    <div className={`${styles.ring} ${styles.ringInner}`} />
                    <div className={`${styles.ring} ${styles.ringMiddle}`} />
                    <div className={`${styles.ring} ${styles.ringOuter}`} />

                    {/* Center Hub - Animated blob */}
                    <div className={styles.centerHub}>
                        <div className={styles.hubBlob} />
                        <div className={styles.hubContent}>
                            <span className={styles.hubLabel}>{t.technologies.hub_label}</span>
                            <span className={styles.hubTitle}>{t.technologies.hub_title}</span>
                        </div>
                        <div className={styles.hubGlow} />
                    </div>

                    {/* Inner Ring Icons */}
                    {rings.inner.map((tech, index) => {
                        const Icon = tech.Icon;
                        const { x, y } = getIconPosition(index, rings.inner.length, 90, 1);
                        return (
                            <div
                                key={tech.name}
                                className={styles.techIcon}
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                                title={tech.name}
                            >
                                <Icon size={18} style={{ color: tech.color }} />
                            </div>
                        );
                    })}

                    {/* Middle Ring Icons - Rotate opposite direction */}
                    {rings.middle.map((tech, index) => {
                        const Icon = tech.Icon;
                        const { x, y } = getIconPosition(index, rings.middle.length, 160, -0.7);
                        return (
                            <div
                                key={tech.name}
                                className={styles.techIcon}
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                                title={tech.name}
                            >
                                <Icon size={18} style={{ color: tech.color }} />
                            </div>
                        );
                    })}

                    {/* Outer Ring Icons */}
                    {rings.outer.map((tech, index) => {
                        const Icon = tech.Icon;
                        const { x, y } = getIconPosition(index, rings.outer.length, 230, 0.5);
                        return (
                            <div
                                key={tech.name}
                                className={styles.techIcon}
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                                title={tech.name}
                            >
                                <Icon size={18} style={{ color: tech.color }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
