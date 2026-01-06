'use client';

import styles from './contact.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className={styles.contactPage}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <span className="section-label">{t.contact.title}</span>
                    <h1>{t.contact.title}</h1>
                    <p className={styles.heroText}>
                        {t.contact.subtitle}
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`section ${styles.contactSection}`}>
                <div className="container">
                    <div className={styles.grid}>
                        {/* Contact Form */}
                        <div className={`glass-card ${styles.formCard}`}>
                            <h2>Send us a message</h2>
                            <form className={styles.form}>
                                <div className={styles.formGrid}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+968 9XXX XXXX"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="service">Service Interested In</label>
                                    <select id="service" name="service">
                                        <option value="">Select a service</option>
                                        <option value="web">Web Development</option>
                                        <option value="software">Custom Software</option>
                                        <option value="mobile">Mobile Apps</option>
                                        <option value="design">UI/UX Design</option>
                                        <option value="marketing">Digital Marketing</option>
                                        <option value="support">Maintenance & Support</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="budget">Estimated Budget</label>
                                    <select id="budget" name="budget">
                                        <option value="">Select budget range</option>
                                        <option value="small">Under 1,000 OMR</option>
                                        <option value="medium">1,000 - 5,000 OMR</option>
                                        <option value="large">5,000 - 15,000 OMR</option>
                                        <option value="enterprise">15,000+ OMR</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Project Details *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoContainer}>
                            <div className={`glass-card ${styles.infoCard}`}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <h3>Visit Us</h3>
                                <p>Muscat, Oman</p>
                            </div>

                            <div className={`glass-card ${styles.infoCard}`}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <h3>Email Us</h3>
                                <p><a href="mailto:hello@webdistt.com">hello@webdistt.com</a></p>
                            </div>

                            <div className={`glass-card ${styles.infoCard}`}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <h3>Call Us</h3>
                                <p>+968 9XXX XXXX</p>
                            </div>

                            <div className={`glass-card ${styles.infoCard}`}>
                                <div className={styles.infoIcon}>
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <h3>Working Hours</h3>
                                <p>Sun - Thu: 9AM - 6PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
