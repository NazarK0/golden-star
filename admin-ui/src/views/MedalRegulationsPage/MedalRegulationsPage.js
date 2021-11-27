/*eslint-disable*/
import HtmlViewer from "components/HtmlViewer";
import React from "react";
import ViewPageDropdown from '../../components/Dropdowns/ViewPageDropdown';
import s from './MedalRegulationsPage.module.css'

export default function MedalRegulationsPage() {
  const html = `<ol>
              <li>
                Звання Герой України присвоюється громадянам України за здійснення 
                визначного геройського вчинку або визначних трудових досягнень.
              </li>
              <li>
                Присвоєння звання Герой України провадиться указом Президента України.
              </li>
              <li>
                Герою України вручається орден «Золота Зірка» за здійснення визначного 
                геройського вчинку або орден Держави — за визначні трудові досягнення.
              </li>
              <li>
                Герой України, удостоєний ордена «Золота Зірка», у разі здійснення ним 
                визначних трудових досягнень може бути удостоєний ордена Держави, а 
                Герой України, удостоєний ордена Держави, у разі здійснення ним 
                геройського вчинку може бути удостоєний ордена «Золота Зірка».
              </li>
              <li>
                Присвоєння звання Герой України вдруге з удостоєнням одного й того ж 
                ордена не провадиться.
              </li>
              <li>
                Звання Герой України може бути присвоєно посмертно.
              </li>
              <li>
                Звання Герой України не присвоюється за заслуги, які мали місце в 
                минулому і не пов'язані зі становленням та розвитком незалежної України.
              </li>
            </ol>`;

  return (
    <section className="header relative pt-32 items-center flex flex-col">
      <ViewPageDropdown editLink="/admin/medal/regulations/edit"/>
      <HtmlViewer htmlString={html} />
    </section>
  );
}
