import React, { useState } from 'react';
import ToDoLi from './ToDoLi';

export default function ToDoLists() {
  const [lists, setLists] = useState(initalObj);
  return lists.map((elem) => <ToDoLi key={elem.key} contents={elem.content} />);
}

const initalObj = [
  { key: 1, content: '밥' },
  { key: 2, content: '공부' },
  { key: 3, content: '청소' },
];
