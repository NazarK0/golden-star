/*eslint-disable*/
import React from "react";
import EditorNewsPage from "components/EditorNewsPage";
import s from './NewsCreateForm.module.css'

export default function NewsCreateForm() {
  const onSaveHandler = () => {};
  
  return (
    <section className="header relative pt-16 items-center flex flex-col">
      < EditorNewsPage onSaveHandler={onSaveHandler} title="Створити новину"/>
    </section>
  );
}
