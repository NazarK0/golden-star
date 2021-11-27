/*eslint-disable*/
import React from "react";
import s from './ContactsPage.module.css'
import TableContacts from "components/Tables/TableContacts";

export default function ContactsPage() {
  return (
    <section className="header relative pt-32 items-center flex flex-col">
      <TableContacts />
    </section>
  );
}
