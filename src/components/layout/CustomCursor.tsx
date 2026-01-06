'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const rafId = useRef<number>(0);

    const updateCursor = useCallback(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        // Smooth interpolation for the ring (0.2 = faster, 0.1 = slower)
        const ease = 0.25;
        cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * ease;
        cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * ease;

        // Use transform for GPU acceleration
        cursor.style.transform = `translate3d(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px, 0)`;
        cursorDot.style.transform = `translate3d(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px, 0)`;

        rafId.current = requestAnimationFrame(updateCursor);
    }, []);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        if (typeof window !== 'undefined' && 'ontouchstart' in window) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Start animation loop
        rafId.current = requestAnimationFrame(updateCursor);

        // Add hover detection for interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]');
            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        // Initial setup and mutation observer for dynamic content
        addHoverListeners();
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            cancelAnimationFrame(rafId.current);
            observer.disconnect();
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible, updateCursor]);

    return (
        <>
            <div
                ref={cursorRef}
                className={`${styles.cursor} ${isHovering ? styles.hovering : ''} ${isVisible ? styles.visible : ''}`}
            />
            <div
                ref={cursorDotRef}
                className={`${styles.cursorDot} ${isHovering ? styles.hovering : ''} ${isVisible ? styles.visible : ''}`}
            />
        </>
    );
}
