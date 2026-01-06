'use client';

import styles from './AnimatedBlobs.module.css';

export default function AnimatedBlobs() {
    return (
        <div className={styles.blobsContainer} aria-hidden="true">
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <div className={`${styles.blob} ${styles.blob3}`}></div>
            <div className={`${styles.blob} ${styles.blob4}`}></div>
            <div className={`${styles.blob} ${styles.blob5}`}></div>
        </div>
    );
}
