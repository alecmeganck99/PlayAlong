import React from "react";
import DocumentTitle from "react-document-title";
import { Age2to6, Age6to12, Age12to18, Age18, Nav } from "../components";

import "../css/App.css";

function Home() {
  return (
    <DocumentTitle title="Play Along | Home">
      <div className="app">
        <Nav />
        <Age2to6 />
        <div className="space"></div>
        <Age6to12 />
        <div className="space"></div>
        <Age12to18 />
        <div className="space"></div>
        <Age18 />
        <div className="footer">
          <p>© copyright 2020 by Alec Meganck</p>
        </div>
      </div>
    </DocumentTitle>
  );
}

export default Home;
