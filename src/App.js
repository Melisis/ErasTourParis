import React, { useState } from "react";
import "./resources/styles.css";
import Featured from "./components/featured";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import TheMap from "./components/TheMap/index";
import Map from "./components/Mapbox/map";
import VenueNfo from "./components/venueNfo/index"; 
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="App">
      <Header/>

      <Element name="first">
        <Featured/>
      </Element>

      <Element name="venuenfo">
        <TheMap/>
        </Element>

      <Element name="location">

      <Map/>
      
      </Element>

      <Element name="highlights">
      <VenueNfo/>
      </Element>
      <Footer/>

    </div>
  );
}

export default App;
