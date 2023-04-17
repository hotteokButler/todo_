import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function ToDoLi({ elem, changeTodoListState, deleteTodoList }) {
  const { id, content, state } = elem;
  return (
    <li>
      <label className={state ? 'done' : 'active'}>
        <input
          type="checkbox"
          name="isCompleted"
          id="check_btn"
          onChange={() => {
            changeTodoListState(id);
          }}
          checked={state ? true : false}
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
