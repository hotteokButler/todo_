import React, { useContext, useState } from 'react';
import style from '../css/input_form.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function InputForm({ updateTodoList }) {
  const { darkMode } = useContext(DarkModeContext);
  const [content, setContent] = useState('');
  return (
    <form
      action=""
      className={`${style.input_form} ${
        darkMode ? style['dark'] : style['light']
      }`}
      onSubmit={(e) => {
        e.preventDefault();
        if (content.trim().length === 0) return;
        updateTodoList(content);
        e.target.reset();
        setContent('');
      }}
    >
      <input
        type="text"
        name=""
        id="wr_list"
        placeholder="Add Todo"
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className={style.button}>
        Add
      </button>
    </form>
  );
}
