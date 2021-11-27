/*eslint-disable*/
import React from "react";
import EditorNewsPage from "components/EditorNewsPage";
import s from './MainNewsCreateForm.module.css'

export default function MainNewsCreateForm() {
  const onSaveHandler = () => {};

  return (
    <section className="header relative pt-16 items-center flex flex-col">
      < EditorNewsPage onSaveHandler={onSaveHandler} title="Створити головну новину"/>
    </section>
  );
}
