"use client"
import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Library</div>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <Icon icon="mdi:home-variant" fontSize={24} style={{ marginRight: 8 }} />
            <span>Home</span>
          </Link></li>
        <li>
          <Link href="/">
            <Icon icon="mdi:book-love" fontSize={24} style={{ marginRight: 8 }} />
            <span>Favourite</span>
          </Link></li>

      </ul>
    </aside >
  );
}

export default Sidebar;