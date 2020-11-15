import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import eightteen from "../images/PlayAlong18.png";

function Age18() {
  return (
    <div className="age grey">
      <div className="container">
        <div className="part">
          <div className="part__info part__center">
            <p>18+<br />jaar</p>
            <Link to="/speelgoed" className="red">Klik hier</Link>
          </div>
          <div className="part__box part__center">
            <img src={eightteen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Age18;
