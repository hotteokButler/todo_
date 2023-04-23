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

    setTodoList((prev) => {
      const newList = [...prev, { ...newCon }];
      localStorage.setItem('toDos', JSON.stringify(newList));

      return newList;
    });
  };

  const deleteTodoList = (key) => {
    setTodoList((prev) => {
      const newList = prev.filter((li) => li.id !== key);
      localStorage.setItem('toDos', JSON.stringify(newList));
      return newList;
    });
  };

  const changeTodoListState = (key) => {
    setTodoList((prev) => {
      const newList = prev.map((li) => {
        if (li.id === key) {
          const state = li.state;
          return { ...li, state: !state };
        } else {
          return li;
        }
      });
      console.log(newList);
      localStorage.setItem('toDos', JSON.stringify(newList));
      return newList;
    });
  };

  const showAll = () => {
    setTodoList((prev) => JSON.parse(localStorage.getItem('toDos')));
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
