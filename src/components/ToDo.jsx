import React from 'react';
import Head from './Head';
import InputForm from './InputForm';
import ToDoLists from './ToDoLists';
import style from '../css/todo_wrap.module.css';
import { DarkModeContext, DarkModeProvider } from '../context/DarkModeContext';

export default function ToDoList() {
  return (
    <DarkModeProvider>
      <div className={style.todo_lis_wrap}>
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
    </DarkModeProvider>
  );
}
