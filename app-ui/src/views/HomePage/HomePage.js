/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import s from './HomePage.module.css'

export default function HomePage() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <img
        className={s.medal}
        src={require("assets/img/120px-Medal_of_Golden_Star_Ukraine.png").default}
        alt="..."
      />
      <div className={ s.introduction }>
        <h1 className="font-semibold text-4xl text-blueGray-600">
          ОРДЕН ЗОЛОЛОТОЇ ЗІРКИ
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
          Звання Герой України — державна нагорода України, найвищий ступінь відзнаки в Україні, 
          що надається громадянам України за здійснення визначного геройського вчинку або 
          видатного трудового досягнення. Героєві України вручається орден «Золота Зірка»...
        </p>
        <div className="mt-12">
          <Link
            to="/about"
            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            Детальніше
          </Link>
        </div>
        
      </div>
      <img className="pattern2"
        src={require("assets/img/вишиванка_узор2.png").default}
        alt="узор 2"
      />
    </section>
  );
}
