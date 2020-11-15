import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import twelveToEightteen from "../images/PlayAlong12-18.png";

function Age12to18() {
  return (
    <div className="age lightyellow">
      <div className="container">
        <div className="part">
          <div className="part__box part__center">
            <img src={twelveToEightteen} />
          </div>
          <div className="part__info part__center">
            <p>12 tot 18 jaar</p>
            <Link to="/speelgoed" className="yellow">Klik hier</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Age12to18;
