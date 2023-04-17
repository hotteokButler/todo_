import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function ToDoLi({
  content,
  id,
  changeTodoListState,
  deleteTodoList,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          name="isCompleted"
          id="check_btn"
          onChange={() => {
            changeTodoListState(id);
          }}
        />
        {content}
      </label>

      <button
        onClick={() => {
          deleteTodoList(id);
        }}
      >
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
