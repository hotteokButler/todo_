import React from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import styles from '../css/head.module.css';

export default function Head() {
  return (
    <header className={styles.header}>
      <nav className={styles.flx_c}>
        <button className={styles.theme_toggle}>
          <BsFillMoonStarsFill />
        </button>
        <ul className={`${styles.flx_c} ${styles.nav_btn_con}`}>
          <li>All</li>
          <li className={styles.on}>Active</li>
          <li>Completed</li>
        </ul>
      </nav>
    </header>
  );
}
