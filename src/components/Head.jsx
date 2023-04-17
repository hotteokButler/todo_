import React, { useContext } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import styles from '../css/head.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Head({ showAll, showAcitve, showCompeleted }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const toggleOn = (target) => {};
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
        <ul
          className={`${styles.flx_c} ${styles.nav_btn_con}`}
          onClick={(e) => {
            toggleOn(e.target);
          }}
        >
          <li onClick={showAll}>All</li>
          <li onClick={showAcitve}>Active</li>
          <li onClick={showCompeleted}>Completed</li>
        </ul>
      </nav>
    </header>
  );
}
