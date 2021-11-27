/*eslint-disable*/
import React from "react";
import TextEditor from "components/TextEditor";
import s from './EditorNewsPage.module.css'

export default function EditorNewsPage({title}) {
  return (
    <section className="header relative pt-16 items-center flex flex-col">
      <h2>{title}</h2>
      <TextEditor className={s.textEditor}/>
    </section>
  );
}