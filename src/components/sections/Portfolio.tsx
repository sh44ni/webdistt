'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Portfolio.module.css';
import { useLanguage } from '@/context/LanguageContext';
import {
    SiReact, SiNodedotjs, SiMongodb, SiAmazonwebservices,
    SiNextdotjs, SiPostgresql, SiStripe, SiGooglemaps,
    SiReact as SiReactNative, SiFirebase, SiTensorflow
} from 'react-icons/si';

// Tech icon mapping
const techIcons: { [key: string]: { Icon: React.ElementType; color: string } } = {
    'React': { Icon: SiReact, color: '#61DAFB' },
    'Node.js': { Icon: SiNodedotjs, color: '#339933' },
    'MongoDB': { Icon: SiMongodb, color: '#47A248' },
    'AWS': { Icon: SiAmazonwebservices, color: '#FF9900' },
    'Next.js': { Icon: SiNextdotjs, color: '#000000' },
    'PostgreSQL': { Icon: SiPostgresql, color: '#4169E1' },
    'Stripe': { Icon: SiStripe, color: '#008CDD' },
    'Google Maps': { Icon: SiGooglemaps, color: '#4285F4' },
    'React Native': { Icon: SiReactNative, color: '#61DAFB' },
    'Firebase': { Icon: SiFirebase, color: '#FFCA28' },
    'TensorFlow': { Icon: SiTensorflow, color: '#FF6F00' },
};

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        category: 'Web Application',
        description: 'A modern e-commerce platform with real-time analytics and inventory management.',
        image: '/portfolio-1.png',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
        challenge: 'Our client needed a modern e-commerce solution to manage their growing inventory across multiple warehouses. Their existing system couldn\'t handle real-time analytics and was causing operational delays that cost them valuable time and revenue.',
        solution: 'We developed a comprehensive dashboard with real-time inventory tracking, automated reporting, and predictive analytics. The platform integrates seamlessly with their existing payment systems and provides mobile access for on-the-go management.',
        features: [
            'Real-time inventory synchronization',
            'Advanced analytics and reporting',
            'Multi-warehouse management',
            'Automated order processing',
            'Customer behavior tracking',
            'Mobile-responsive interface',
        ],
        results: [
            { stat: '40%', label: 'Increase in operational efficiency' },
            { stat: '5', label: 'Warehouse locations synced in real-time' },
            { stat: '60%', label: 'Reduction in order processing time' },
        ],
        testimonial: {
            text: 'Web Distt transformed our entire e-commerce operation. The dashboard they built is intuitive, powerful, and has significantly improved our team\'s productivity. Highly recommended!',
            name: 'Ahmed Al-Rashidi',
            role: 'CEO at TechMart Oman',
        },
    },
    {
        id: 2,
        title: 'Real Estate Platform',
        category: 'Web Application',
        description: 'A sleek property management platform with virtual tours and smart search.',
        image: '/portfolio-2.png',
        technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Google Maps'],
        challenge: 'A leading real estate agency in Muscat needed to modernize their property listing system. Their paper-based processes were causing missed opportunities and clients were frustrated with the lack of online viewing options.',
        solution: 'We built a comprehensive real estate platform featuring 360° virtual property tours, intelligent search filters, and an integrated CRM for agent-client communication. The platform also includes automated document generation and secure online payments.',
        features: [
            '360° virtual property tours',
            'AI-powered property matching',
            'Integrated mortgage calculator',
            'Automated document generation',
            'Agent performance dashboard',
            'Multi-language support (EN/AR)',
        ],
        results: [
            { stat: '85%', label: 'More property inquiries' },
            { stat: '3x', label: 'Faster deal closures' },
            { stat: '200+', label: 'Properties listed in first month' },
        ],
        testimonial: {
            text: 'The platform Web Distt built has completely transformed how we do business. Our clients love the virtual tours and our agents are closing deals faster than ever. A true game-changer!',
            name: 'Fatima Al-Balushi',
            role: 'Director at Oman Premier Properties',
        },
    },
    {
        id: 3,
        title: 'Mobile Fitness App',
        category: 'Mobile Application',
        description: 'Enterprise analytics dashboard with real-time data visualization and reporting.',
        image: '/portfolio-3.png',
        technologies: ['React Native', 'Firebase', 'TensorFlow', 'Node.js'],
        challenge: 'A fitness startup wanted to disrupt the Omani health market with an app that provides personalized workout plans. Existing apps were generic and didn\'t account for local dietary preferences or Arabic language support.',
        solution: 'We created a bilingual fitness app with AI-powered workout recommendations, nutrition tracking tailored to Middle Eastern cuisine, and social features to keep users motivated. The app syncs with popular wearables and includes gamification elements.',
        features: [
            'AI-powered personalized workouts',
            'Arabic/English bilingual interface',
            'Middle Eastern nutrition database',
            'Wearable device integration',
            'Social challenges and leaderboards',
            'Offline workout mode',
        ],
        results: [
            { stat: '50K+', label: 'Downloads in first quarter' },
            { stat: '4.8', label: 'Star rating on App Store' },
            { stat: '78%', label: 'User retention after 30 days' },
        ],
        testimonial: {
            text: 'Web Distt understood our vision perfectly. The app they delivered exceeded our expectations - it\'s beautiful, fast, and our users absolutely love the personalized experience. Best investment we\'ve made!',
            name: 'Mohammed Al-Habsi',
            role: 'Founder at FitOman',
        },
    },
];

export default function Portfolio() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const dragStartX = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        if (isPaused || selectedProject) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [isPaused, selectedProject]);

    // Navigation functions
    const goToSlide = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, []);

    // Global scroll listener when carousel is in view
    const lastScrollTime = useRef(0);
    const isInView = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                isInView.current = entry.isIntersecting && entry.intersectionRatio > 0.3;
            },
            { threshold: [0.3, 0.5, 0.7] }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        const handleGlobalWheel = (e: WheelEvent) => {
            if (!isInView.current || selectedProject) return;

            const now = Date.now();
            if (now - lastScrollTime.current < 350) return;
            lastScrollTime.current = now;

            e.preventDefault();

            if (e.deltaY > 0 || e.deltaX > 0) {
                setActiveIndex((prev) => (prev + 1) % projects.length);
            } else {
                setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
            }
        };

        window.addEventListener('wheel', handleGlobalWheel, { passive: false });

        return () => {
            observer.disconnect();
            window.removeEventListener('wheel', handleGlobalWheel);
        };
    }, [selectedProject]);

    // Drag/swipe handlers
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        setIsPaused(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        dragStartX.current = clientX;
    };

    const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        setIsDragging(false);
        setIsPaused(false);

        const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
        const diff = dragStartX.current - clientX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    // Modal handlers
    const openModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = '';
    };

    return (
        <section id="portfolio" className={`section ${styles.portfolio}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">{t.portfolio.title}</span>
                    <h2 className="section-title">{t.portfolio.subtitle}</h2>
                    <p className="section-subtitle">
                        {t.portfolio.subtitle}
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className={styles.carousel}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
                    onMouseDown={handleDragStart}
                    onMouseUp={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchEnd={handleDragEnd}
                >
                    <div className={styles.track}>
                        {projects.map((project, index) => {
                            const isActive = index === activeIndex;
                            const isPrev = index === (activeIndex - 1 + projects.length) % projects.length;
                            const isNext = index === (activeIndex + 1) % projects.length;

                            return (
                                <div
                                    key={project.id}
                                    className={`${styles.card} ${isActive ? styles.active : ''} ${isPrev ? styles.prev : ''} ${isNext ? styles.next : ''}`}
                                >
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className={styles.image}
                                        />
                                        <div className={styles.overlay} />
                                    </div>
                                    <div className={styles.content}>
                                        <span className={styles.category}>{project.category}</span>
                                        <h3 className={styles.title}>{project.title}</h3>
                                        <p className={styles.description}>{project.description}</p>
                                        <div className={styles.technologies}>
                                            {project.technologies.slice(0, 4).map((tech) => {
                                                const techData = techIcons[tech];
                                                if (!techData) return null;
                                                const { Icon, color } = techData;
                                                return (
                                                    <span key={tech} className={styles.techIcon} title={tech}>
                                                        <Icon size={20} color={color} />
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <button
                                            className={styles.viewBtn}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openModal(project);
                                            }}
                                        >
                                            View Project
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation */}
                    <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={prevSlide}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button className={`${styles.navBtn} ${styles.navNext}`} onClick={nextSlide}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Dots - Below Carousel */}
                <div className={styles.dots}>
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>

                <div className={styles.viewAll}>
                    <Link href="/portfolio" className={styles.viewAllLink}>
                        View All Projects
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className={styles.modalContent}>
                            {/* Header Image */}
                            <div className={styles.modalImage}>
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>

                            {/* Project Info */}
                            <div className={styles.modalBody}>
                                <span className={styles.modalCategory}>{selectedProject.category}</span>
                                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>

                                {/* The Challenge */}
                                <div className={styles.modalSection}>
                                    <h3>The Challenge</h3>
                                    <p>{selectedProject.challenge}</p>
                                </div>

                                {/* Our Solution */}
                                <div className={styles.modalSection}>
                                    <h3>Our Solution</h3>
                                    <p>{selectedProject.solution}</p>
                                </div>

                                {/* Key Features */}
                                <div className={styles.modalSection}>
                                    <h3>Key Features</h3>
                                    <ul className={styles.featureList}>
                                        {selectedProject.features.map((feature, i) => (
                                            <li key={i}>
                                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies Used */}
                                <div className={styles.modalSection}>
                                    <h3>Technologies Used</h3>
                                    <div className={styles.modalTech}>
                                        {selectedProject.technologies.map((tech) => (
                                            <span key={tech} className={styles.techBadge}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Results */}
                                <div className={styles.modalSection}>
                                    <h3>Results</h3>
                                    <div className={styles.resultsGrid}>
                                        {selectedProject.results.map((result, i) => (
                                            <div key={i} className={styles.resultCard}>
                                                <span className={styles.resultStat}>{result.stat}</span>
                                                <span className={styles.resultLabel}>{result.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className={styles.modalTestimonial}>
                                    <p>&ldquo;{selectedProject.testimonial.text}&rdquo;</p>
                                    <div className={styles.testimonialAuthor}>
                                        <div className={styles.authorAvatar}>
                                            {selectedProject.testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <strong>{selectedProject.testimonial.name}</strong>
                                            <span>{selectedProject.testimonial.role}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className={styles.modalCTA}>
                                    <Link href="/contact" className={styles.ctaPrimary}>
                                        Start Similar Project
                                    </Link>
                                    <Link href="/contact" className={styles.ctaSecondary}>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
