import React from 'react';
import { TimelineItem } from '@/types/timeline';
import styles from '@/styles/Education.module.css';

interface TimelineItemComponentProps {
  item: TimelineItem;
  isExternal?: boolean;
}

const TimelineItemComponent: React.FC<TimelineItemComponentProps> = ({ 
  item, 
  isExternal = true 
}) => (
  <div className={styles.timelineItem}>
    <div className={styles.timelineMarker} />
    <div className={styles.timelineContent}>
      <h3>{item.title}</h3>
      {isExternal ? (
        <a
          href={item.organizationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          {item.organization}
        </a>
      ) : (
        <span className={styles.socialLink}>{item.organization}</span>
      )}
      <p className={styles.date}>{item.date}</p>
      <p className={styles.description}>{item.description}</p>
    </div>
  </div>
);

export default TimelineItemComponent;
