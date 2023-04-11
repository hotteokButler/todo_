import React from 'react';
import style from '../css/input_form.module.css';

export default function InputForm() {
  return (
    <form action="" className={style.input_form}>
      <input type="text" name="" id="wr_list" placeholder="Add Todo" />
      <button type="submit" className={style.button}>
        Add
      </button>
    </form>
  );
}
