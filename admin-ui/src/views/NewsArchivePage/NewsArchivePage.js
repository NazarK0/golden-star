/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from '@material-ui/lab';
import CardTable from "components/Cards/CardTable.js";

import s from './NewsArchivePage.module.css'

export default function NewsArchivePage() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="w-full mb-12 px-4">
        <CardTable color="dark" />
      </div>
      <Pagination count={10} showFirstButton showLastButton className={s.paginationBar} />
    </section>
  );
}
