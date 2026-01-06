import { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'About Us | Web Distt',
    description: 'Learn about Web Distt - your trusted web and software development partner in Oman. Discover our story, values, and commitment to excellence.',
};

const values = [
    {
        icon: (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Innovation',
        description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
        icon: (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Collaboration',
        description: 'We believe in working hand-in-hand with our clients, maintaining open communication throughout every project.',
    },
    {
        icon: (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Quality',
        description: 'Quality is not negotiable. Every line of code, every design element, and every interaction is crafted with precision.',
    },
    {
        icon: (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Speed',
        description: 'We understand the importance of time-to-market. Our agile approach ensures rapid development without compromising quality.',
    },
];

const team = [
    { name: 'Ahmed Al Rashdi', role: 'CEO & Founder', initial: 'A' },
    { name: 'Fatima Al Balushi', role: 'Lead Developer', initial: 'F' },
    { name: 'Mohammed Al Habsi', role: 'UI/UX Designer', initial: 'M' },
    { name: 'Sara Al Lawati', role: 'Project Manager', initial: 'S' },
];

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <span className="section-label">About Us</span>
                    <h1>Your Digital Partner in Oman</h1>
                    <p className={styles.heroText}>
                        Founded with a vision to empower businesses through technology, Web Distt
                        has grown to become one of Oman&apos;s leading web and software development agencies.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className={`section ${styles.story}`}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyContent}>
                            <h2>Our Story</h2>
                            <p>
                                Web Distt was born from a simple belief: every business deserves access to
                                world-class digital solutions. What started as a small team of passionate
                                developers has evolved into a full-service digital agency serving clients
                                across Oman and the GCC region.
                            </p>
                            <p>
                                Our journey has been defined by continuous learning, adaptation, and an
                                unwavering commitment to our clients&apos; success. We&apos;ve had the privilege of
                                working with businesses of all sizes, from ambitious startups to established
                                enterprises, helping them navigate the digital landscape.
                            </p>
                            <p>
                                Today, we combine local market expertise with global best practices to
                                deliver solutions that drive real business results. Our team speaks both
                                Arabic and English, ensuring seamless communication and culturally relevant
                                solutions for our diverse client base.
                            </p>
                        </div>
                        <div className={styles.storyStats}>
                            <div className={`glass-card ${styles.statCard}`}>
                                <span className={styles.statNumber}>150+</span>
                                <span className={styles.statLabel}>Projects Delivered</span>
                            </div>
                            <div className={`glass-card ${styles.statCard}`}>
                                <span className={styles.statNumber}>8+</span>
                                <span className={styles.statLabel}>Years Experience</span>
                            </div>
                            <div className={`glass-card ${styles.statCard}`}>
                                <span className={styles.statNumber}>50+</span>
                                <span className={styles.statLabel}>Happy Clients</span>
                            </div>
                            <div className={`glass-card ${styles.statCard}`}>
                                <span className={styles.statNumber}>24/7</span>
                                <span className={styles.statLabel}>Support Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={`section ${styles.values}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Values</span>
                        <h2 className="section-title">What Drives Us</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((value) => (
                            <div key={value.title} className={`glass-card ${styles.valueCard}`}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={`section ${styles.team}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Our Team</span>
                        <h2 className="section-title">Meet the Experts</h2>
                        <p className="section-subtitle">
                            Our talented team of developers, designers, and strategists are passionate about creating exceptional digital experiences.
                        </p>
                    </div>
                    <div className={styles.teamGrid}>
                        {team.map((member) => (
                            <div key={member.name} className={`glass-card ${styles.teamCard}`}>
                                <div className={styles.avatar}>{member.initial}</div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Ready to Work Together?</h2>
                        <p>Let&apos;s discuss your next project and see how we can help you succeed.</p>
                        <Link href="/contact" className="btn btn-primary">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
