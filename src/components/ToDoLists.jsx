import React, { useContext } from 'react';
import ToDoLi from './ToDoLi';
import style from '../css/todo_list.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function ToDoLists({
  todoLists,
  changeTodoListState,
  deleteTodoList,
}) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <ul
      className={`${style.todo_lists} ${
        darkMode ? style['dark'] : style['light']
      }`}
    >
      {todoLists.length > 0 ? (
        todoLists.map((elem, idx) => {
          return (
            <ToDoLi
              key={idx}
              elem={elem}
              changeTodoListState={changeTodoListState}
              deleteTodoList={deleteTodoList}
            />
          );
        })
      ) : (
        <span className={style.note}>내용을 입력해주세요</span>
      )}
    </ul>
  );
}
