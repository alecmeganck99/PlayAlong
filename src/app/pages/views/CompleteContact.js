import React from "react";
import DocumentTitle from "react-document-title";
import { Nav } from "../../components";

import "../../css/App.css";

function Completecontact() {
  return (
    <DocumentTitle title="Play Along | Contactbewijs">
      <div className="app">
        <Nav />
        <div className="container">
          <div className="thanks">
            <p>Danku voor uw vraag!</p>
          </div>
        </div>
        <div className="footer">
          <p>© copyright 2020 by Alec Meganck</p>
        </div>
      </div>
    </DocumentTitle>
  );
}

export default Completecontact;
