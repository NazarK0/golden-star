/*eslint-disable*/
import React from "react";
import { Pagination } from '@material-ui/lab';
import TableAwrded from "components/Tables/TableAwarded";

import s from './AwardedListPage.module.css'

export default function AwardedListPage() {
  return (
    <section className="header relative pt-32 items-center flex items-center flex-col">
      <TableAwrded />
      <Pagination count={10} showFirstButton showLastButton className={s.paginationBar} />
    </section>
  );
}
