import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

const Home: React.FC = () => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  const hasTypedRef = useRef(false);

  useEffect(() => {
    if (!subtitleRef.current || hasTypedRef.current) return;

    hasTypedRef.current = true;

    const element = subtitleRef.current;
    const text = 'Backend Developer';
    element.textContent = '';

    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        setTimeout(typeWriter, 120);
      }
    };

    typeWriter();
  }, []);

  return (
    <Layout>
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Hi, I&apos;m <span className={styles.highlight}>Roman Kriuchkov</span>
            </h1>
            <h2 className={styles.heroSubtitle} ref={subtitleRef}></h2>
            <p className={styles.heroDescription}>
              I design and develop efficient backend systems, APIs, and databases.
              My focus is on performance, clean architecture, and scalable solutions.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                Get In Touch
              </Link>
              <Link href="/projects" className={`${styles.btn} ${styles.btnSecondary}`}>
                View Projects
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.profileCard}>
              <div className={styles.profileAvatar}>
                <img
                  src="/images/image.png"
                  alt="Profile"
                />
              </div>
              <div className={styles.statusIndicator}>
                <span className={styles.statusDot}></span>
                Open to new opportunities
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
