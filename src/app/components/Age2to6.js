import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import twoToSix from "../images/PlayAlong2-6.png";

function Age2to6() {
  return (
    <div className="age lightpink">
      <div className="container">
        <div className="part">
          <div className="part__box part__center">
            <img src={twoToSix} />
          </div>
          <div className="part__info part__center">
            <p>2 tot 6 <br /> jaar</p>
            <Link to="/speelgoed" className="pink">Klik hier</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Age2to6;
