import React from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/About.module.css';

const About: React.FC = () => {
  return (
    <Layout title="About - Roman Kriuchkov">
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                My name is Roman Kriuchkov — a backend developer with a strong academic foundation
                and a drive to build reliable, scalable systems. I began my journey in Ukraine, studying
                Software Engineering at KPI (Kyiv Polytechnic Institute), and now continue my path at
                Queen&apos;s University Belfast, expanding my expertise in the international environment.
              </p>
              <p>
                My core stack revolves around <strong>Java, C/C++, and Python</strong>. Over the past few years, I&apos;ve developed projects ranging
                from bots to full-stack applications and database-driven systems. Currently, I&apos;m building a
                <strong> CRM platform</strong> as a portfolio project — combining technical depth with practical business value.
              </p>
              <p>
                What drives me most is solving challenging problems, designing clean architectures, and pushing
                technology to deliver performance and reliability at scale.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2+</span>
                  <span className={styles.statLabel}>Years of Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>8+</span>
                  <span className={styles.statLabel}>Core Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="personal" className={`${styles.about} ${styles.personal}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Beyond Tech</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                I was born and raised in Ukraine, and my journey in tech has been shaped by
                resilience, adaptability, and a strong desire to build a future abroad.
                Thanks to the <em>Homes for Ukraine</em> sponsorship program, I am now pursuing
                my academic and career goals in the UK.
              </p>
              <p>
                Outside of programming, I am deeply passionate about sports, music, travel,
                and hands-on creativity. Here are some of the things that keep me motivated
                and inspired:
              </p>
            </div>
          </div>

          <div className={styles.hobbiesGrid}>
            <div className={styles.hobby}>
              <span className={styles.hobbyIcon}>💪</span>
              <h3>Calisthenics</h3>
              <p>Dynamic street workout on bars and parallel bars — combining strength, control, and movement.</p>
            </div>
            <div className={styles.hobby}>
              <span className={styles.hobbyIcon}>🎸</span>
              <h3>Guitar</h3>
              <p>Currently learning guitar as a way to express creativity and balance logical thinking with art.</p>
            </div>
            <div className={styles.hobby}>
              <span className={styles.hobbyIcon}>🚴</span>
              <h3>Cycling & Travel</h3>
              <p>Long-distance rides, exploring new places, and enjoying the freedom of the road.</p>
            </div>
            <div className={styles.hobby}>
              <span className={styles.hobbyIcon}>⛰️</span>
              <h3>Nature & Mountains</h3>
              <p>Hiking, mountain landscapes, and the outdoors — my main source of inspiration and energy.</p>
            </div>
            <div className={styles.hobby}>
              <span className={styles.hobbyIcon}>🌍</span>
              <h3>Languages</h3>
              <p>Fluent in Ukrainian and Russian, improving English daily, and recently started learning Turkish.</p>
            </div>
            <div className={styles.hobby}>
              <span className={styles.hobbyIcon}>🚗</span>
              <h3>Cars & Mechanics</h3>
              <p>Interested in automotive engineering, car tuning, and understanding how things work under the hood.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
