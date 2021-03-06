/*eslint-disable*/
import React from "react";
import SimpleEditorPage from "components/SimpleEditorPage";
import s from './MedalAboutEditForm.module.css'

export default function MedalAboutEditForm() {
  const html = `<p>
            Орден «Золота Зірка» звання Герой України виготовляється із золота і має 
            форму п'ятикутної зірки, накладеної на вінок із дубового листя. Промені 
            зірки поліровані.
            Розмір ордена між протилежними вершинами зірки 35 мм.
            Зворотний бік ордена плоский, з написом рельєфними літерами «Герой України» 
            та порядковим номером ордена.
            У верхньому промені зірки є кільце з вушком, яке сполучається з фігурною 
            колодкою, обтягнутою стрічкою. Довжина колодки — 45 мм, ширина — 28 мм. 
            На зворотному боці колодки є застібка для прикріплення ордена до одягу.
            Стрічка ордена шовкова муарова зі смужками синього і жовтого кольорів. Ширина 
            стрічки — 28 мм, ширина кожної смужки — 14 мм.
            Відповідно до Статуту відзнаки Президента України «Герой України», було 
            передбачено, що замість ордена нагороджений міг носити мініатюру ордена або 
            орденську планку, які розміщуються вище мініатюр і планок інших відзнак 
            Президента України.
            Планка ордена «Золота Зірка» — це прямокутна металева пластинка, обтягнута 
            стрічкою. На планці — позолочене зображення ордена «Золота Зірка». Розмір 
            планки: висота — 12 мм, ширина — 28 мм.
            Мініатюра ордена «Золота Зірка» є копією ордена у зменшеному вигляді.
            Згідно з чинним Статутом звання Герой України, замість ордена, особа 
            відзначена званням Герой України, може носити мініатюру ордена, яка 
            розміщується вище мініатюр і планок інших державних нагород України; 
            орденська планка не передбачена.
          </p>`;
  
  const onSaveHandler = () => {};

  return (
    <section className="header relative pt-16 items-center flex flex-col">
      < SimpleEditorPage onSaveHandler={onSaveHandler} title="Редагувати інформацію про орден" text={html}/>
    </section>
  );
}
