import React from "react";
import DocumentTitle from "react-document-title";
import { Nav } from "../components";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import "../css/App.css";

function Contact() {
  return (
    <DocumentTitle title="Play Along | Contact">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="register">
            <form className="form">
              <div className="form-control">
                <span>Naam*</span>
                <input required />
              </div>
              <div className="form-control">
                <span>Beschrijving*</span>
                <textarea required />
              </div>
              <div className="form-control">
                <span>E-mail*</span>
                <input required />
              </div>
              <button type="submit"><Link to="/completecontact">Verstuur</Link></button>
            </form>
          </div>
        </div>
        <div className="footer">
          <p>© copyright 2020 by Alec Meganck</p>
        </div>
      </div>
    </DocumentTitle>
  );
}

export default Contact;
