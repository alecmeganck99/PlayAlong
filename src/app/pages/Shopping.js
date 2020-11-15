import React from "react";
import DocumentTitle from "react-document-title";
import { Nav } from "../components";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import "../css/App.css";

const currentData = JSON.parse(localStorage.getItem('cart'));
// const removeFromCart = localStorage.removeItem('cart');

function Shopping() {
  return (
    <DocumentTitle title="Play Along | Winkelmandje">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="bag">
            <p>Jouw aankopen:</p>

            {currentData ?
              currentData.map(item => {
                return (
                  <div className="game" key={item.game.id}>
                    <div className="game__img">
                      <img src={item.game.thumbnailUrl} />
                    </div>
                    <p className="game__title">{item.game.title}</p>
                    <div className="game__total">
                      <p>1 -</p>
                      <p className="price">{item.game.price}</p>
                    </div>
                  </div>
                )
              })
              :
              <p></p>
            }

            <div className="bag__total">
              <Link to="/thanks" ><p >Afrekenen</p></Link>
              {/* onClick={() => (removeFromCart)} */}
            </div>
          </div>
        </div>
        <div className="footer">
          <p>© copyright 2020 by Alec Meganck</p>
        </div>
      </div>
    </DocumentTitle>
  );
}

export default Shopping;
