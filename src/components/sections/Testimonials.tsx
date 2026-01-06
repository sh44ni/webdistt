'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import { useLanguage } from '@/context/LanguageContext';

// Sample reviews data
const reviews = [
    {
        id: 1,
        name: 'Mohammed Al Habsi',
        role: 'CEO',
        company: 'Al Habsi Trading',
        rating: 5,
        text: 'Web Distt transformed our online presence completely. Their attention to detail and understanding of our brand was exceptional. Highly recommend!',
    },
    {
        id: 2,
        name: 'Sarah Al Balushi',
        role: 'Marketing Director',
        company: 'Oman Tourism LLC',
        rating: 5,
        text: 'The team delivered beyond our expectations. Our new website has significantly increased our bookings and customer engagement.',
    },
    {
        id: 3,
        name: 'Ahmed Al Rawahi',
        role: 'Founder',
        company: 'TechStart Oman',
        rating: 5,
        text: 'Professional, responsive, and incredibly talented. They built our mobile app from scratch and it has been a game-changer for our business.',
    },
    {
        id: 4,
        name: 'Fatima Al Hinai',
        role: 'Operations Manager',
        company: 'Muscat Logistics',
        rating: 5,
        text: 'Outstanding work on our inventory management system. The solution they built has saved us countless hours every week.',
    },
];

export default function Testimonials() {
    const { t } = useLanguage();
    const [activeReview, setActiveReview] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        rating: 0,
        review: '',
        captcha: '',
    });
    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<string[]>([]);

    // Generate captcha
    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        setCaptcha({
            a: Math.floor(Math.random() * 10) + 1,
            b: Math.floor(Math.random() * 10) + 1,
        });
    };

    // Auto-advance reviews
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveReview((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors([]);
    };

    const handleRating = (rating: number) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: string[] = [];

        if (!formData.name.trim()) newErrors.push('name');
        if (!formData.email.trim()) newErrors.push('email');
        if (formData.rating === 0) newErrors.push('rating');
        if (!formData.review.trim()) newErrors.push('review');
        if (parseInt(formData.captcha) !== captcha.a + captcha.b) newErrors.push('captcha');

        if (newErrors.length > 0) {
            setErrors(newErrors);
            if (newErrors.includes('captcha')) generateCaptcha();
            return;
        }

        // Success
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', rating: 0, review: '', captcha: '' });
        generateCaptcha();
        setTimeout(() => setFormStatus('idle'), 3000);
    };

    const nextReview = () => setActiveReview((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section id="testimonials" className={`section ${styles.testimonials}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">{t.testimonials.title}</span>
                    <h2 className="section-title">{t.testimonials.subtitle}</h2>
                    <p className="section-subtitle">
                        {t.testimonials.subtitle}
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* LEFT - Review Form */}
                    <div className={styles.formCard}>
                        <h3 className={styles.formTitle}>{t.testimonials.form.title}</h3>

                        {formStatus === 'success' ? (
                            <div className={styles.successMessage}>
                                <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>Thank you for your review!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`${styles.input} ${errors.includes('name') ? styles.inputError : ''}`}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`${styles.input} ${errors.includes('email') ? styles.inputError : ''}`}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company / Role (Optional)"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                    />
                                </div>

                                <div className={`${styles.inputGroup} ${styles.ratingGroup}`}>
                                    <span className={styles.ratingLabel}>Rating *</span>
                                    <div className={`${styles.stars} ${errors.includes('rating') ? styles.starsError : ''}`}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => handleRating(star)}
                                                className={`${styles.star} ${formData.rating >= star ? styles.starActive : ''}`}
                                            >
                                                ★
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <textarea
                                        name="review"
                                        placeholder="Tell us about your experience... *"
                                        rows={3}
                                        value={formData.review}
                                        onChange={handleInputChange}
                                        className={`${styles.textarea} ${errors.includes('review') ? styles.inputError : ''}`}
                                    />
                                </div>

                                <div className={`${styles.inputGroup} ${styles.captchaGroup}`}>
                                    <span className={styles.captchaQuestion}>
                                        What is {captcha.a} + {captcha.b}?
                                    </span>
                                    <input
                                        type="number"
                                        name="captcha"
                                        placeholder="Answer"
                                        value={formData.captcha}
                                        onChange={handleInputChange}
                                        className={`${styles.captchaInput} ${errors.includes('captcha') ? styles.inputError : ''}`}
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Submit Review
                                </button>
                            </form>
                        )}
                    </div>

                    {/* RIGHT - Reviews Display */}
                    <div className={styles.reviewsSection}>
                        {/* Review Summary */}
                        <div className={styles.summaryCard}>
                            <div className={styles.overallRating}>
                                <div className={styles.ratingNumber}>
                                    <span className={styles.bigNumber}>4.9</span>
                                    <span className={styles.outOf}>/5.0</span>
                                </div>
                                <div className={styles.summaryStars}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className={styles.summaryStar}>★</span>
                                    ))}
                                </div>
                                <span className={styles.reviewCount}>Based on 247 reviews</span>
                            </div>
                            <div className={styles.ratingBars}>
                                {[
                                    { stars: 5, percent: 90 },
                                    { stars: 4, percent: 8 },
                                    { stars: 3, percent: 1 },
                                    { stars: 2, percent: 0.5 },
                                    { stars: 1, percent: 0.5 },
                                ].map((item) => (
                                    <div key={item.stars} className={styles.barRow}>
                                        <span className={styles.barLabel}>{item.stars} ★</span>
                                        <div className={styles.barTrack}>
                                            <div
                                                className={styles.barFill}
                                                style={{ width: `${item.percent}%` }}
                                            />
                                        </div>
                                        <span className={styles.barPercent}>{item.percent}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Review Card */}
                        <div className={styles.reviewCard}>
                            <div className={styles.reviewStars}>
                                {[...Array(reviews[activeReview].rating)].map((_, i) => (
                                    <span key={i} className={styles.reviewStar}>★</span>
                                ))}
                            </div>
                            <blockquote className={styles.reviewText}>
                                &ldquo;{reviews[activeReview].text}&rdquo;
                            </blockquote>
                            <div className={styles.reviewer}>
                                <div className={styles.avatar}>
                                    {reviews[activeReview].name.charAt(0)}
                                </div>
                                <div className={styles.reviewerInfo}>
                                    <span className={styles.reviewerName}>{reviews[activeReview].name}</span>
                                    <span className={styles.reviewerRole}>
                                        {reviews[activeReview].role}, {reviews[activeReview].company}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className={styles.reviewNav}>
                            <button onClick={prevReview} className={styles.navBtn}>
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <span className={styles.reviewCounter}>
                                {activeReview + 1} / 247
                            </span>
                            <button onClick={nextReview} className={styles.navBtn}>
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
