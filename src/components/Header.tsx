import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/components.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <Link href="/" className={styles.logoText}>
            RK
          </Link>
        </div>
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Projects & Skills
            </Link>
          </li>
          <li>
            <Link
              href="/education"
              className={`${styles.navLink} ${isActive('/education') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className={`${styles.navLink} ${isActive('/work') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Job History
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
