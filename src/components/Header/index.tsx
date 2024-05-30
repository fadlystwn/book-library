import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header} >
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" width={128} height={32} alt="logo" />
          </Link>
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
