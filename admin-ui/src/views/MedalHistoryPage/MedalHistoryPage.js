/*eslint-disable*/
import HtmlViewer from "components/HtmlViewer";
import React from "react";
import ViewPageDropdown from '../../components/Dropdowns/ViewPageDropdown';
import s from './MedalHistoryPage.module.css'

export default function MedalHistoryPage() {
  const html = `<ul>
            <li>
              23 серпня 1998 року Указом Президента України Л. Д. Кучми № 944/98 встановлена 
              відзнака Президента України «Герой України» (з врученням ордена «Золота Зірка» 
              або ордена Держави). Указом також затверджені Статут відзнаки Президента 
              України «Герой України» та описи орденів «Золота Зірка» та Держави.
            </li>
            <li>
              16 березня 2000 року Верховна Рада України прийняла Закон України «Про державні 
              нагороди України», у якому було передбачено, що державною нагородою України — 
              вищим ступенем відзнаки в Україні є звання Герой України (з врученням ордена 
              «Золота Зірка» або ордена Держави). Було установлено, що дія цього Закону 
              поширюється на правовідносини, пов'язані з нагородженням осіб, нагороджених 
              відзнаками Президента України до набрання чинності цим Законом; рекомендовано 
              Президентові України привести свої укази у відповідність із цим Законом.
            </li>
            <li>
              2 грудня 2002 року Указом Президента України № 1114/2002 був визнаний таким, що 
              втратив чинність, попередній Указ № 944/98; затверджено новий Статут звання Герой 
              України; затверджені нові описи ордена «Золота Зірка» та ордена Держави звання 
              Герой України і нової мініатюри до них.
            </li>
            <li>
              13 квітня 2017 року Верховна Рада ухвалила поправку до закону «Про державні 
              нагороди України», відповідно до якої, звання Герой України може бути надано, як 
              виняток, посмертно іноземцю, нагородженому орденом Героїв Небесної Сотні, за 
              здійснення визначного геройського вчинку, пов'язаного з відстоюванням 
              конституційних засад демократії, прав і свобод людини під час Революції Гідності 
              (листопад 2013 року — лютий 2014 року).
            </li>
            <li>
              28 березня 2019 року Указом Президента України № 92/2019 Статут звання Герой 
              України був доповнений положенням щодо виплати одноразової грошової винагороди 
              особам, яким надано звання Герой України за здійснення визначного геройського 
              вчинку з врученням ордена «Золота Зірка», або членам їх сімей у разі надання 
              звання Герой України з відзначенням орденом «Золота Зірка» посмертно або в разі 
              смерті особи, якій надано звання Герой України із врученням ордена «Золота Зірка», 
              у 50-кратному розмірі прожиткового мінімуму, встановленого для працездатних осіб на 
              1 січня календарного року, в якому надано звання Герой України.
            </li>
          </ul>`;

  return (
    <section className="header relative pt-32 items-center flex flex-col">
      <ViewPageDropdown />
      <HtmlViewer htmlString={html} />
    </section>
  );
}
