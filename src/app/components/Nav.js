import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import logo from "../images/PlayAlongLogo.svg";
import bag from "../images/shopping-bags.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__login">
        <Link to="/login">Login</Link>
      </div>
      <div className="nav__links">
        <Link to="/speelgoed">Speelgoed</Link>
        <Link to="/" className="logo"><img src={logo} /></Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav__bag">
        <Link to="/winkelmandje"><img src={bag} /></Link>
      </div>
    </div>
  );
}

export default Nav;
