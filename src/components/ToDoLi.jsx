import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function ToDoLi({ contents }) {
  return (
    <li>
      <label>
        <input type="checkbox" name="isCompleted" id="check_btn" />
        {contents}
      </label>

      <button>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
