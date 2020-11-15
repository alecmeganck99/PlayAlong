import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import sixToTwelve from "../images/PlayAlong6-12.png";

function Age6to12() {
  return (
    <div className="age lightorange">
      <div className="container">
        <div className="part">
          <div className="part__info part__center">
            <p>6 tot 12 jaar</p>
            <Link to="/speelgoed" className="orange">Klik hier</Link>
          </div>
          <div className="part__box part__center">
            <img src={sixToTwelve} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Age6to12;
