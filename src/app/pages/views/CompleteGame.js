import React from "react";
import DocumentTitle from "react-document-title";
import { Nav } from "../../components";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import "../../css/App.css";

function Completegame() {
  return (
    <DocumentTitle title="Play Along | Registratie Game">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="thanks">
            <p>Danku voor uw aankoop!</p>
            <Link to="/admin">Admin paneel</Link>
          </div>
        </div>
        <div className="footer">
          <p>© copyright 2020 by Alec Meganck</p>
        </div>
      </div>
    </DocumentTitle>
  );
}

export default Completegame;
