import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar";
import HeaderStats from "components/Headers/HeaderStats.js";
import Footer from "components/Footer";

// views

import Dashboard from "views/admin/Dashboard.js";
import AwardedListPage from "views/AwardedListPage";
import MedalHistoryPage from "views/MedalHistoryPage";
import MedalRegulationsPage from "views/MedalRegulationsPage";
import MedalRegulationsEditForm from "views/MedalRegulationsEditForm";
import NewsCreateForm from "views/NewsCreateForm";
import NewsEditForm from "views/NewsEditForm";
import MainNewsCreateForm from "views/MainNewsCreateForm";
import MainNewsEditForm from "views/MainNewsEditForm";
import MainNewsArchivePage from "views/MainNewsArchivePage";
import NewsArchivePage from "views/NewsArchivePage";
import ContactsPage from "views/ContactsPage";
import SettingsPage from "views/SettingsPage";
import MedalAboutPage from "views/MedalAboutPage";
import MedalProcedurePage from "views/MedalProcedurePage";
import AdminProfilePage from "views/AdminProfilePage";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/medal/awarded-list" component={AwardedListPage} />
            <Route exact path="/admin/medal/history" component={MedalHistoryPage} />
            <Route exact path="/admin/medal/history/edit" component={MedalHistoryPage} />
            <Route exact path="/admin/medal/about" component={MedalAboutPage} />
            <Route exact path="/admin/medal/about/edit" component={MedalAboutPage} />
            <Route exact path="/admin/medal/procedure" component={MedalProcedurePage} />
            <Route exact path="/admin/medal/procedure/edit" component={MedalProcedurePage} />
            <Route exact path="/admin/medal/regulations" component={MedalRegulationsPage} />
            <Route exact path="/admin/medal/regulations/edit" component={MedalRegulationsEditForm} />
            <Route exact path="/admin/news/create" component={NewsCreateForm} />
            <Route exact path="/admin/news/edit/:id" component={NewsEditForm} />
            <Route exact path="/admin/news/archive" component={NewsArchivePage} />
            <Route exact path="/admin/main-news/create" component={MainNewsCreateForm} />
            <Route exact path="/admin/main-news/edit/:id" component={MainNewsEditForm} />
            <Route exact path="/admin/main-news/archive" component={MainNewsArchivePage} />
            <Route exact path="/admin/contacts" component={ContactsPage} />
            <Route exact path="/admin/contacts/edit" component={ContactsPage} />
            <Route exact path="/admin/settings" component={SettingsPage} />
            <Route exact path="/admin/profile" component={AdminProfilePage} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <Footer />
        </div>
      </div>
    </>
  );
}
