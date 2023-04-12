import React, { useState } from 'react';
import ToDoLi from './ToDoLi';
import style from '../css/todo_list.module.css';

export default function ToDoLists() {
  const [lists, setLists] = useState(initalObj);
  return (
    <ul className={style.todo_lists}>
      {lists.map((elem) => (
        <ToDoLi key={elem.key} contents={elem.content} />
      ))}
    </ul>
  );
}

const initalObj = [
  { key: 1, content: '밥' },
  { key: 2, content: '공부' },
  { key: 3, content: '청소' },
];
