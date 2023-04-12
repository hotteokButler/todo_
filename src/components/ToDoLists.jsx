import React, { useState } from 'react';
import ToDoLi from './ToDoLi';
import style from '../css/todo_list.module.css';

export default function ToDoLists() {
  const [lists, setLists] = useState([]);
  return (
    <>
      <ul className={style.todo_lists}>
        {lists.length > 0 ? (
          lists.map((elem, idx) => (
            <ToDoLi key={idx} contents={elem.content} />
          ))
        ) : (
          <span className={style.note}>
            내용을 입력해주세요
          </span>
        )}
      </ul>
    </>
  );
}
