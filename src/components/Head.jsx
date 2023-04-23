import React, { useContext, useState } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import styles from '../css/head.module.css';
import { useDarkMode } from '../context/DarkModeContext';

export default function Head({ handleFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentTab, setCurrentTab] = useState('All');
  const menuArr = [
    { name: 'All', action: 'showAll' },
    { name: 'Active', action: 'showActive' },
    { name: 'Complete', action: 'showCompeleted' },
  ];

  const handleTabAction = (elem) => {
    setCurrentTab(elem.name);
    handleFilter(elem.action);
  };

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
          {menuArr.map((el, idx) => (
            <li
              key={idx}
              className={el.name === currentTab ? styles['on'] : ''}
              onClick={() => handleTabAction(el)}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
