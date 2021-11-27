/*eslint-disable*/
import React from "react";
import EditorNewsPage from "views/EditorNewsPage";
import s from './NewsCreateForm.module.css'

export default function NewsCreateForm() {
  return (
    <section className="header relative pt-16 items-center flex flex-col">
      < EditorNewsPage title="Створити новину"/>
    </section>
  );
}
