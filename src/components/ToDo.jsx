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
      state: false,
    };
    localStorage.setItem(uuid(), JSON.stringify(newCon));
    setTodoList((prev) => [...prev, { ...newCon }]);
  };

  const deleteTodoList = (key) => {
    localStorage.removeItem(key);
    setTodoList((prev) => prev.filter((li) => li.id !== key));
  };

  const changeTodoListState = (key) => {
    setTodoList((prev) =>
      prev.map((li) => {
        if (li.id === key) {
          const newLi = { ...li, state: !li.state };
          localStorage.setItem(key, JSON.stringify(newLi));
          return newLi;
        } else {
          return li;
        }
      })
    );
  };

  const showAll = () => {
    const keys = Object.keys(localStorage);

    setTodoList((prev) => {
      return keys.map((key) => ({
        id: key,
        content: JSON.parse(localStorage.getItem(key)).content,
        state: JSON.parse(localStorage.getItem(key)).state,
      }));
    });
  };
  const showAcitve = () => {
    showAll();
    setTodoList((prev) => prev.filter((li) => li.state !== true));
  };
  const showCompeleted = () => {
    showAll();
    setTodoList((prev) => prev.filter((li) => li.state === true));
  };

  useEffect(() => {
    localStorage.length > 0 && showAll();

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
          <Head
            showAll={showAll}
            showAcitve={showAcitve}
            showCompeleted={showCompeleted}
          />
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
