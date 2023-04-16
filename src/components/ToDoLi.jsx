import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function ToDoLi({ content }) {
  return (
    <li>
      <label>
        <input type="checkbox" name="isCompleted" id="check_btn" />
        {content}
      </label>

      <button>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
