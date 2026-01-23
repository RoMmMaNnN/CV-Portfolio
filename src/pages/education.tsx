import React from 'react';
import Layout from '@/components/Layout';
import TimelineItem from '@/components/TimelineItem';
import { educationData } from '@/data/timeline';
import styles from '@/styles/Education.module.css';

const Education: React.FC = () => {
  return (
    <Layout title="Education - Roman Kriuchkov">
      <section className={styles.education}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Education</h2>
          </div>
          <div className={styles.timeline}>
            {educationData.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
