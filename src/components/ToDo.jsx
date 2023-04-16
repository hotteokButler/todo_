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
    const new_id = uuid();
    const newCon = {
      id: new_id,
      content: content,
      state: true,
    };
    localStorage.setItem(uuid(), JSON.stringify(newCon));
    setTodoList((prev) => [...prev, { ...newCon }]);
    console.log(todoLists);
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
    localStorage.setItem(key, JSON.stringify(stateChage));
    setTodoList((prev) => [...prev, { ...stateChage }]);
  };

  const showAcitve = () => {
    setTodoList((prev) => prev.filter((li) => li.state));
  };

  const showCompeleted = () => {
    setTodoList((prev) => prev.filter((li) => !li.state));
  };

  useEffect(() => {
    const keys = Object.keys(localStorage);

    localStorage.length > 0 &&
      setTodoList((prev) => {
        return [
          ...keys.map((key) => ({
            id: key,
            content: JSON.parse(localStorage.getItem(key)),
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
          <Head showAcitve={showAcitve} showCompeleted={showCompeleted} />
        </div>

        <ToDoLists
          todoLists={todoLists}
          changeTodoListState={changeTodoListState}
          deleteTodoList={deleteTodoList}
        />

        <div className={style.btm}>
          <InputForm updateTodoList={updateTodoList} />
        </div>
      </div>
    </div>
  );
}
