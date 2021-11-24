/*eslint-disable*/
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "components/Footer";
import s from './PageLayout.module.css'
import HomePage from "views/HomePage";
import AboutPage from "views/AboutPage";
import GalleryPage from "views/GalleryPage";
import NewsPage from "views/NewsPage";
import ContactsPage from "views/ContactsPage";

export default function PageLayout() {
  return (
    <>
      <Navbar fixed />
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
