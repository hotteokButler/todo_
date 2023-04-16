import React, { useContext } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import styles from '../css/head.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Head() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header
      className={`${styles.header} ${
        darkMode ? styles['dark'] : styles['light']
      }`}
    >
      <nav className={styles.flx_c}>
        <button className={styles.theme_toggle} onClick={toggleDarkMode}>
          {darkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </button>
        <ul className={`${styles.flx_c} ${styles.nav_btn_con}`}>
          <li className={styles.on}>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </nav>
    </header>
  );
}
