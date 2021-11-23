/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import s from './PageLayout.module.css'
import HomePage from "views/GalleryPage";
import AboutPage from "views/AboutPage";
import GalleryPage from "views/GalleryPage";
import NewsPage from "views/NewsPage";
import ContactsPage from "views/ContactsPage";

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
