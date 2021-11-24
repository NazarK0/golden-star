/*eslint-disable*/
import React from "react";
import { Pagination } from '@material-ui/lab';
import s from './NewsPage.module.css';
import CardNews from '../../components/Cards/CardNews';
import CardNewsMain from '../../components/Cards/CardNewsMain';

export default function NewsPage() {
  return (
    <section className="header relative pt-24 items-center flex flex-col">
    <div className="container flex flex-col items-center">
      <div className="flex flex-row flex-wrap">
        <CardNewsMain />
        <CardNewsMain />
        <CardNewsMain />
        <CardNewsMain />
      </div>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      <Pagination count={10} showFirstButton showLastButton className={s.paginationBar} />
    </section>
  );
}
