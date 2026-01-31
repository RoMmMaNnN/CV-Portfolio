import React from 'react';
import Layout from '@/components/Layout';
import TimelineItem from '@/components/TimelineItem';
import { experienceData } from '@/data/timeline';
import styles from '@/styles/Work.module.css';

const Work: React.FC = () => {
  return (
    <Layout title="Experience - Roman Kriuchkov">
      <section className={styles.work}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Experience</h2>
          </div>
          <div className={styles.timeline}>
            {experienceData.map((item, index) => (
              <TimelineItem key={`${item.organization}-${index}`} item={item} isExternal />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
