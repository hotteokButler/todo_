import React, { useContext } from 'react';
import Head from './Head';
import InputForm from './InputForm';
import ToDoLists from './ToDoLists';
import style from '../css/todo_wrap.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function ToDoList() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={`${style.todo_lis_wrap} ${
        darkMode ? style['dark'] : style['light']
      }`}
    >
      <div className={style.todo_lis_con}>
        <div className={style.top}>
          <Head />
        </div>

        <ToDoLists />

        <div className={style.btm}>
          <InputForm />
        </div>
      </div>
    </div>
  );
}
