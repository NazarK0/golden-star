/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from '@material-ui/lab';
import TableNews from "components/Tables/TableNews";

import s from './NewsArchivePage.module.css'

export default function NewsArchivePage() {
  return (
    <section className="header relative pt-32 items-center flex flex-col">
      <TableNews />
      <Pagination count={10} showFirstButton showLastButton className={s.paginationBar} />
    </section>
  );
}
