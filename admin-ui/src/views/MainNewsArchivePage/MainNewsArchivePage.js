/*eslint-disable*/
import React from "react";
import { Pagination } from '@material-ui/lab';
import s from './MainNewsArchivePage.module.css'
import TableMainNews from "components/Tables/TableMainNews";

export default function MainNewsArchivePage() {
  return (
    <section className="header relative pt-32 items-center flex flex-col">
      <div className="w-full mb-12 px-4">
        <TableMainNews />
      </div>
      <Pagination count={10} showFirstButton showLastButton className={s.paginationBar} />
    </section>
  );
}
