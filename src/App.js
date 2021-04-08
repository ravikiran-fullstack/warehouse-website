import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import Properties from "./components/properties/Properties";
import Gallery from "./components/gallery/Gallery";
import Location from "./components/location/Location";
import ContactUs from "./components/contactus/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/aboutus">
              <AboutUs />
            </Route>

            <Route path="/properties">
              <Properties />
            </Route>

            <Route path="/gallery">
              <Gallery />
            </Route>

            <Route path="/location">
              <Location />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
