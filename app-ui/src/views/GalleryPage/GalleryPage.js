/*eslint-disable*/
import React from "react";
import { Pagination } from '@material-ui/lab';
import s from './GalleryPage.module.css';
import CardHero from '../../components/Cards/CardHero';
import PhotosMap from '../../components/PhotosMap';

export default function GalleryPage() {
  return (
    <section className="header relative pt-16">
      <div className="container items-center flex flex-col">
        <PhotosMap />
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
          <CardHero />
          <CardHero />
          <CardHero />
          <CardHero />
          <CardHero />
          <CardHero />
        </div>
        <Pagination count={10} showFirstButton showLastButton className={s.paginationBar} />
      </div>
    </section>
  );
}
