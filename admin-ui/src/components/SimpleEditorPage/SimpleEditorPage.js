/*eslint-disable*/
import React from "react";
import TextEditor from "components/TextEditor";
import s from './SimpleEditorPage.module.css'

export default function SimpleEditorPage({title, onSaveHandler, text=''}) {
  return (
    <section className="header relative pt-16 items-center flex flex-col">
      <ul className={s.controlButtons}>
        <li>
          <button className="btn" title="Зберегти" onClick={onSaveHandler}><i className="far fa-save text-3xl text-lightBlue-500 hover:text-lightBlue-600"></i></button>
        </li>
      </ul>
      <h2>{title}</h2>
      <TextEditor className={s.textEditor} text={text}/>
    </section>
  );
}