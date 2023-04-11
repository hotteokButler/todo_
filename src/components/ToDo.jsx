import React from 'react';
import Head from './Head';
import InputForm from './InputForm';
import ToDoLists from './ToDoLists';
import style from '../css/todo_wrap.module.css';

export default function ToDoList() {
  return (
    <div className={style.todo_lis_wrap}>
      <div className={style.top}>
        <Head />
      </div>

      <ToDoLists />

      <div className={style.btm}>
        <InputForm />
      </div>
    </div>
  );
}
