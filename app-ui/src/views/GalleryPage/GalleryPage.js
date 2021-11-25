/*eslint-disable*/
import React from "react";
import { Pagination } from '@material-ui/lab';
import s from './GalleryPage.module.css';
import CardHero from '../../components/Cards/CardHero';

export default function GalleryPage() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <img
        className={s.medal}
        src={require("assets/img/ukraine.png").default}
        alt="Орден 'Золотої Зірки'"
      />
      <div className={s.heroesList}>
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
      </div>
      <Pagination count={10} showFirstButton showLastButton className={s.paginationBar} />
    </section>
  );
}
