/*eslint-disable*/
import React from "react";
import EditorNewsPage from "views/EditorNewsPage";
import s from './MainNewsCreateForm.module.css'

export default function MainNewsCreateForm() {
  return (
    <section className="header relative pt-16 items-center flex flex-col">
      < EditorNewsPage title="Створити головну новину"/>
    </section>
  );
}
