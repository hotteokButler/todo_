import React, { useContext } from 'react';
import style from '../css/input_form.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function InputForm() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <form
      action=""
      className={`${style.input_form} ${
        darkMode ? style['dark'] : style['light']
      }`}
    >
      <input type="text" name="" id="wr_list" placeholder="Add Todo" />
      <button type="submit" className={style.button}>
        Add
      </button>
    </form>
  );
}
