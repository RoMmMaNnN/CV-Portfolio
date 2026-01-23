import React from 'react';
import styles from '@/styles/components.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} Roman Kriuchkov. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
