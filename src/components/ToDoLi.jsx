import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function ToDoLi({ key, contents }) {
  return (
    <li key={key}>
      {contents}
      <button>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
