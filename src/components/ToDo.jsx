import React, { useContext, useEffect, useState } from 'react';
import Head from './Head';
import InputForm from './InputForm';
import ToDoLists from './ToDoLists';
import style from '../css/todo_wrap.module.css';
import { DarkModeContext } from '../context/DarkModeContext';
import uuid from 'react-uuid';

export default function ToDoList() {
  const { darkMode } = useContext(DarkModeContext);
  const [todoLists, setTodoList] = useState([]);

  const updateTodoList = (content) => {
    const id = uuid();
    const newCon = {
      id,
      content,
      state: true,
    };
    localStorage.setItem(uuid(), newCon);
    setTodoList((prev) => [...prev, { id: newCon }]);
  };

  const deleteTodoList = (key) => {
    localStorage.removeItem(key);
    setTodoList((prev) => prev.filter((elem) => elem.id !== key));
  };

  const changeTodoListState = (key) => {
    const stateChage = {
      ...localStorage.getItem(key),
      state: !localStorage.getItem(key).state,
    };
    localStorage.setItem(key, stateChage);
    setTodoList((prev) => [...prev, { key: stateChage }]);
  };

  const showAcitve = () => {
    setTodoList((prev) => prev.filter((li) => li.state));
  };

  const showCompeleted = () => {
    setTodoList((prev) => prev.filter((li) => !li.state));
  };

  useEffect(() => {
    localStorage.lenght > 0 &&
      setTodoList((prev) => {
        const keys = Object.keys(localStorage);
        return [
          keys.map((key) => ({
            id: key,
            content: localStorage.getItem(key),
            state: 'active',
          })),
        ];
      });

    return;
  }, []);

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

        <ToDoLists todoLists={todoLists} />

        <div className={style.btm}>
          <InputForm />
        </div>
      </div>
    </div>
  );
}
