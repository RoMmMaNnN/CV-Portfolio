import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

// Get basePath from next config
const basePath = process.env.NODE_ENV === 'production' ? '/CV-Portfolio' : '';

const Home: React.FC = () => {

  return (
    <Layout>
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Junior Backend Developer (Java)
            </h1>
            <h2 className={styles.heroSubtitle}>
              Software Engineering Student with Commercial Experience
            </h2>
            <p className={styles.heroDescription}>
              Java • Spring Boot • REST APIs • Microservices • PostgreSQL • Docker
            </p>
            <div className={styles.heroButtons}>
              <Link href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                View Backend Projects
              </Link>
              <a 
                href={`${basePath}/assets/Roman_Kriuchkov_CV.pdf`}
                className={`${styles.btn} ${styles.btnSecondary}`}
                download
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.profileCard}>
              <div className={styles.profileAvatar}>
                <Image
                  src={`${basePath}/images/image.png`}
                  alt="Profile"
                  width={200}
                  height={200}
                  priority
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
