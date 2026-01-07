'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './portfolio.module.css';
import {
    SiReact, SiNodedotjs, SiMongodb, SiAmazonwebservices,
    SiNextdotjs, SiPostgresql, SiStripe, SiGooglemaps,
    SiReact as SiReactNative, SiFirebase, SiTensorflow,
    SiWordpress, SiFlutter, SiVuedotjs, SiLaravel, SiMysql, SiShopify,
    SiTypescript, SiTailwindcss, SiDocker, SiRedis
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
    'WordPress': { Icon: SiWordpress, color: '#21759B' },
    'Flutter': { Icon: SiFlutter, color: '#02569B' },
    'Vue.js': { Icon: SiVuedotjs, color: '#4FC08D' },
    'Laravel': { Icon: SiLaravel, color: '#FF2D20' },
    'MySQL': { Icon: SiMysql, color: '#4479A1' },
    'Shopify': { Icon: SiShopify, color: '#7AB55C' },
    'TypeScript': { Icon: SiTypescript, color: '#3178C6' },
    'Tailwind': { Icon: SiTailwindcss, color: '#06B6D4' },
    'Docker': { Icon: SiDocker, color: '#2496ED' },
    'Redis': { Icon: SiRedis, color: '#DC382D' },
};

const projects = [
    {
        id: 1,
        title: 'Luxury Fashion Boutique',
        category: 'E-commerce',
        description: 'An elegant online fashion store with curated collections, seamless checkout, and personalized recommendations.',
        image: '/project-fashion.png',
        technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
        challenge: 'A high-end fashion brand needed a sophisticated e-commerce platform that reflects their luxury identity while providing a seamless shopping experience across all devices.',
        solution: 'We crafted a stunning dark-themed e-commerce experience with gold accents, featuring AI-powered product recommendations, virtual try-on capabilities, and a streamlined checkout process.',
        features: [
            'Curated collection showcases',
            'AI-powered style recommendations',
            'Virtual try-on technology',
            'Multi-currency support',
            'Wishlist & favorites',
            'Express checkout',
        ],
        results: [
            { stat: '150%', label: 'Increase in online sales' },
            { stat: '45%', label: 'Higher average order value' },
            { stat: '3.2s', label: 'Average page load time' },
        ],
        testimonial: {
            text: 'Web Distt captured our brand essence perfectly. The website is as elegant as our collections and our customers love the shopping experience.',
            name: 'Layla Al-Mansouri',
            role: 'Creative Director at Raha Fashion',
        },
    },
    {
        id: 2,
        title: 'PropertyHub Pro',
        category: 'Web Application',
        description: 'A comprehensive real estate platform with interactive maps, virtual tours, and smart property matching.',
        image: '/project-property.png',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Maps'],
        challenge: 'A growing real estate agency needed a modern platform to showcase their extensive property portfolio and streamline the buyer-agent communication process.',
        solution: 'We built an intuitive property listing platform with interactive map views, advanced search filters, and integrated communication tools for seamless buyer-agent interactions.',
        features: [
            'Interactive map-based search',
            'Advanced property filters',
            'Virtual property tours',
            'Mortgage calculator',
            'Agent dashboard',
            'Lead management system',
        ],
        results: [
            { stat: '200+', label: 'Properties listed monthly' },
            { stat: '85%', label: 'More qualified leads' },
            { stat: '2x', label: 'Faster deal closures' },
        ],
        testimonial: {
            text: 'PropertyHub Pro revolutionized how we do business. Our agents are more efficient and clients find their dream homes faster.',
            name: 'Omar Al-Rashid',
            role: 'CEO at Gulf Properties',
        },
    },
    {
        id: 3,
        title: 'AnalyticsFlow',
        category: 'Web Application',
        description: 'A powerful business intelligence dashboard with real-time data visualization and actionable insights.',
        image: '/project-analytics.png',
        technologies: ['React', 'TypeScript', 'Node.js', 'Redis'],
        challenge: 'An enterprise client needed a centralized dashboard to monitor KPIs across multiple departments and make data-driven decisions in real-time.',
        solution: 'We developed a comprehensive analytics platform with customizable widgets, real-time data streaming, and AI-powered insights that help executives make informed decisions.',
        features: [
            'Real-time data visualization',
            'Custom dashboard widgets',
            'Automated report generation',
            'Role-based access control',
            'API integrations',
            'Predictive analytics',
        ],
        results: [
            { stat: '60%', label: 'Faster decision making' },
            { stat: '40%', label: 'Cost reduction in reporting' },
            { stat: '99.9%', label: 'Platform uptime' },
        ],
        testimonial: {
            text: 'AnalyticsFlow gives us complete visibility into our operations. The insights we gain are invaluable for strategic planning.',
            name: 'Sarah Al-Kindi',
            role: 'COO at Oman Enterprises',
        },
    },
    {
        id: 4,
        title: 'MediConnect',
        category: 'Web Application',
        description: 'A modern healthcare portal connecting patients with doctors through seamless appointment scheduling and telemedicine.',
        image: '/project-healthcare.png',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
        challenge: 'A medical center network wanted to digitize their patient experience, reducing wait times and enabling remote consultations.',
        solution: 'We created a comprehensive patient portal with online booking, secure medical records, telemedicine integration, and automated appointment reminders.',
        features: [
            'Online appointment booking',
            'Telemedicine consultations',
            'Secure health records',
            'Prescription management',
            'Insurance integration',
            'Multi-location support',
        ],
        results: [
            { stat: '70%', label: 'Reduction in no-shows' },
            { stat: '25K+', label: 'Patients onboarded' },
            { stat: '4.9', label: 'Patient satisfaction rating' },
        ],
        testimonial: {
            text: 'MediConnect transformed our patient experience. The platform is intuitive for all age groups and our staff loves it.',
            name: 'Dr. Fatima Al-Lawati',
            role: 'Medical Director at Oman Health',
        },
    },
    {
        id: 5,
        title: 'FoodieExpress',
        category: 'Mobile Application',
        description: 'A feature-rich food delivery app with real-time tracking, multiple payment options, and restaurant management.',
        image: '/project-food.png',
        technologies: ['Flutter', 'Firebase', 'Stripe', 'Google Maps'],
        challenge: 'A food delivery startup needed a robust mobile app to compete with established players while offering unique local features.',
        solution: 'We built a comprehensive food delivery ecosystem with customer apps, driver apps, and restaurant management dashboards, all working seamlessly together.',
        features: [
            'Real-time order tracking',
            'Multiple payment gateways',
            'Restaurant dashboard',
            'Driver management',
            'Loyalty rewards program',
            'Push notifications',
        ],
        results: [
            { stat: '100+', label: 'Restaurant partners' },
            { stat: '50K', label: 'Monthly active users' },
            { stat: '4.7', label: 'App Store rating' },
        ],
        testimonial: {
            text: 'FoodieExpress helped us build a thriving local food delivery network. The app is fast, reliable, and customers love it!',
            name: 'Khalid Al-Harthy',
            role: 'Founder at FoodieExpress',
        },
    },
    {
        id: 6,
        title: 'FitnessPro Tracker',
        category: 'Mobile Application',
        description: 'An intelligent fitness app with personalized workouts, progress tracking, and social challenges.',
        image: '/project-fitness.png',
        technologies: ['React Native', 'Firebase', 'TensorFlow', 'Node.js'],
        challenge: 'A fitness brand wanted a comprehensive tracking app that motivates users through personalization and social features.',
        solution: 'We developed an AI-powered fitness app with personalized workout plans, detailed progress analytics, wearable integration, and engaging social challenges.',
        features: [
            'AI-powered workout plans',
            'Progress visualization',
            'Wearable device sync',
            'Social challenges',
            'Nutrition tracking',
            'Offline workout mode',
        ],
        results: [
            { stat: '75K+', label: 'Downloads in 6 months' },
            { stat: '82%', label: '30-day retention rate' },
            { stat: '4.8', label: 'App Store rating' },
        ],
        testimonial: {
            text: 'FitnessPro keeps our members engaged and motivated. The personalized approach has significantly improved their fitness journeys.',
            name: 'Ahmed Al-Habsi',
            role: 'CEO at FitLife Oman',
        },
    },
];

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const openModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = '';
    };

    return (
        <div className={styles.portfolioPage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <span className="section-label">Our Work</span>
                    <h1>Portfolio</h1>
                    <p className={styles.heroText}>
                        Take a look at some of our recent work and see how we&apos;ve helped businesses like yours succeed online.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className={`section ${styles.portfolioSection}`}>
                <div className="container">
                    <div className={styles.grid}>
                        {projects.map((project) => (
                            <div key={project.id} className={styles.card}>
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
                                            if (!techData) return <span key={tech} className={styles.techBadge}>{tech}</span>;
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
                                        onClick={() => openModal(project)}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
        </div>
    );
}
