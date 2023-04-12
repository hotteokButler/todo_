import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function ToDoLi({ key, contents }) {
  return (
    <li key={key}>
      <label htmlFor="check_btn">
        <input type="checkbox" name="isCompleted" id="check_btn" />
        {contents}
      </label>

      <button>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
