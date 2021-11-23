/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import s from './HomePage.module.css'
import HomePage from "views/GalleryPage/GalleryPage";
import AboutPage from "views/AboutPage/AboutPage";
import GalleryPage from "views/GalleryPage/GalleryPage";
import NewsPage from "views/NewsPage/NewsPage";
import ContactsPage from "views/ContactsPage/ContactsPage";

export default function PageLayout() {
  return (
    <>
      <IndexNavbar fixed />
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/gallery" exact component={GalleryPage} />
        <Route path="/news" exact component={NewsPage} />
        <Route path="/contacts" exact component={ContactsPage} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </>
  );
}
