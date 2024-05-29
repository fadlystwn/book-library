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
            <a href="/" className={styles.navLink}>User</a>
          </li>
          <li className={styles.navItem}>
            <a href="/favourite" className={styles.navLink}>Logout</a>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
