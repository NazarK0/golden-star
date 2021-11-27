/*eslint-disable*/
import React from "react";
import SimpleEditorPage from "components/SimpleEditorPage";
import s from './MedalRegulationsEditForm.module.css'

export default function MedalRegulationsEditForm() {
  const html = `<p>
                  Статут
                </p>
               `;
  
  const onSaveHandler = () => {};

  return (
    <section className="header relative pt-16 items-center flex flex-col">
      < SimpleEditorPage onSaveHandler={onSaveHandler} title="Редагувати Статут" text={html}/>
    </section>
  );
}
