import { Metadata } from 'next';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata: Metadata = {
    title: 'Services | Web Distt',
    description: 'Explore our comprehensive range of web development, software development, mobile apps, UI/UX design, and digital marketing services.',
};

const services = [
    {
        id: 'web',
        icon: (
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'Web Development',
        description: 'From stunning landing pages to complex e-commerce platforms, we build fast, secure, and scalable websites that convert visitors into customers.',
        features: [
            { name: 'Custom WordPress Development', desc: 'Tailored WordPress solutions with custom themes and plugins.' },
            { name: 'E-commerce Solutions', desc: 'WooCommerce, Shopify, and custom online stores.' },
            { name: 'Web Applications', desc: 'Complex web apps with modern frameworks like React and Next.js.' },
            { name: 'Landing Pages', desc: 'High-converting landing pages optimized for your campaigns.' },
        ],
    },
    {
        id: 'software',
        icon: (
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'Custom Software',
        description: 'Streamline your operations with tailor-made software solutions that automate workflows and boost productivity.',
        features: [
            { name: 'ERP Systems', desc: 'Enterprise resource planning solutions for complete business management.' },
            { name: 'CRM Platforms', desc: 'Customer relationship management systems to grow your business.' },
            { name: 'Business Automation', desc: 'Automate repetitive tasks and streamline operations.' },
            { name: 'API Development', desc: 'RESTful APIs and integrations with third-party services.' },
        ],
    },
    {
        id: 'mobile',
        icon: (
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        title: 'Mobile Apps',
        description: 'Reach your customers wherever they are with powerful native and cross-platform mobile applications.',
        features: [
            { name: 'iOS Development', desc: 'Native iOS apps with Swift for optimal performance.' },
            { name: 'Android Development', desc: 'Native Android apps with Kotlin for all devices.' },
            { name: 'Cross-Platform Apps', desc: 'Flutter and React Native for multi-platform deployment.' },
            { name: 'App Maintenance', desc: 'Ongoing support, updates, and performance optimization.' },
        ],
    },
    {
        id: 'design',
        icon: (
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        title: 'UI/UX Design',
        description: 'Create memorable digital experiences with user-centered design that looks beautiful and works seamlessly.',
        features: [
            { name: 'User Research', desc: 'Deep understanding of your users\' needs and behaviors.' },
            { name: 'Wireframing', desc: 'Low-fidelity prototypes to validate concepts early.' },
            { name: 'Visual Design', desc: 'Stunning interfaces that reflect your brand identity.' },
            { name: 'Prototyping', desc: 'Interactive prototypes for testing and stakeholder buy-in.' },
        ],
    },
    {
        id: 'marketing',
        icon: (
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ),
        title: 'Digital Marketing',
        description: 'Get found online and grow your audience with data-driven digital marketing strategies.',
        features: [
            { name: 'SEO Optimization', desc: 'Improve your search rankings and organic visibility.' },
            { name: 'Social Media Marketing', desc: 'Engage your audience across social platforms.' },
            { name: 'Google Ads', desc: 'Targeted pay-per-click campaigns that drive results.' },
            { name: 'Content Strategy', desc: 'Compelling content that attracts and converts.' },
        ],
    },
    {
        id: 'support',
        icon: (
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Maintenance & Support',
        description: 'Keep your digital assets running smoothly with comprehensive maintenance and 24/7 support.',
        features: [
            { name: 'Security Updates', desc: 'Regular updates to keep your systems secure.' },
            { name: 'Performance Optimization', desc: 'Continuous improvement of speed and efficiency.' },
            { name: 'Backup Management', desc: 'Automated backups and disaster recovery.' },
            { name: 'Technical Support', desc: '24/7 support from our expert team.' },
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className={styles.servicesPage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <span className="section-label">Our Services</span>
                    <h1>Comprehensive Digital Solutions</h1>
                    <p className={styles.heroText}>
                        From concept to launch, we provide end-to-end digital solutions tailored to your unique business needs.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className={`section ${styles.servicesList}`}>
                <div className="container">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`${styles.serviceItem} ${index % 2 === 1 ? styles.reversed : ''}`}
                        >
                            <div className={styles.serviceContent}>
                                <div className={styles.serviceIcon}>{service.icon}</div>
                                <h2>{service.title}</h2>
                                <p className={styles.serviceDesc}>{service.description}</p>
                                <div className={styles.features}>
                                    {service.features.map((feature) => (
                                        <div key={feature.name} className={styles.feature}>
                                            <h4>{feature.name}</h4>
                                            <p>{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/contact" className="btn btn-primary">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
