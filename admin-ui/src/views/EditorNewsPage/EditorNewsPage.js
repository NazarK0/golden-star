/*eslint-disable*/
import React from "react";
import TextEditor from "components/TextEditor";
import s from './EditorNewsPage.module.css'

export default function EditorNewsPage() {
  return (
    <section className="header relative pt-16 items-center flex">
      <h2>Редагувати Новину</h2>
      <TextEditor />
    </section>
  );
}