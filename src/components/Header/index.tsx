import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header} >
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          Logo
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={styles.navLink}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="/services" className={styles.navLink}>Services</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={styles.navLink}>Contact</a>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
