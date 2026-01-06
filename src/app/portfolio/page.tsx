'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import styles from './portfolio.module.css';

const categories = ['All', 'E-commerce', 'Corporate', 'Web Apps', 'Mobile Apps'];

const projects = [
    {
        id: 1,
        title: 'Luxury Fashion Store',
        category: 'E-commerce',
        client: 'Al Raha Fashion',
        description: 'Complete e-commerce solution with multi-currency support and Arabic localization.',
        technologies: ['WordPress', 'WooCommerce', 'PHP'],
    },
    {
        id: 2,
        title: 'Real Estate Management System',
        category: 'Web Apps',
        client: 'Oman Properties LLC',
        description: 'Custom property management platform with tenant portal and automated billing.',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
        id: 3,
        title: 'Corporate Website Redesign',
        category: 'Corporate',
        client: 'Gulf Trading Co.',
        description: 'Modern corporate website with investor relations portal and news section.',
        technologies: ['Next.js', 'Tailwind', 'Sanity CMS'],
    },
    {
        id: 4,
        title: 'Food Delivery App',
        category: 'Mobile Apps',
        client: 'Muscat Eats',
        description: 'Full-featured delivery app with real-time tracking and multiple payment options.',
        technologies: ['Flutter', 'Firebase', 'Stripe'],
    },
    {
        id: 5,
        title: 'Healthcare Booking Platform',
        category: 'Web Apps',
        client: 'Oman Medical Center',
        description: 'Patient appointment system with doctor profiles and medical records.',
        technologies: ['Vue.js', 'Laravel', 'MySQL'],
    },
    {
        id: 6,
        title: 'Construction Company Website',
        category: 'Corporate',
        client: 'BuildRight Oman',
        description: 'Project showcase website with interactive portfolio and client testimonials.',
        technologies: ['WordPress', 'Custom Theme', 'ACF'],
    },
    {
        id: 7,
        title: 'Online Grocery Store',
        category: 'E-commerce',
        client: 'Fresh Market Oman',
        description: 'Grocery e-commerce with delivery slot scheduling and subscription options.',
        technologies: ['Shopify', 'React', 'Node.js'],
    },
    {
        id: 8,
        title: 'Fitness Tracking App',
        category: 'Mobile Apps',
        client: 'FitOman',
        description: 'Personal fitness app with workout plans, progress tracking, and social features.',
        technologies: ['React Native', 'Node.js', 'MongoDB'],
    },
];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = projects.filter(
        (project) => activeFilter === 'All' || project.category === activeFilter
    );

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
                    <div className={styles.filters}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.filterBtn} ${activeFilter === category ? styles.active : ''}`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className={styles.grid}>
                        {filteredProjects.map((project) => (
                            <div key={project.id} className={`glass-card ${styles.card}`}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.imagePlaceholder}>
                                        <span>{project.title.charAt(0)}</span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p className={styles.client}>Client: {project.client}</p>
                                    <p className={styles.description}>{project.description}</p>
                                    <div className={styles.technologies}>
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className={styles.tech}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
