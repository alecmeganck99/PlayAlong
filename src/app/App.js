import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Speelgoed from "./pages/Speelgoed";
import SpeelgoedDetail from "./pages/SpeelgoedDetail";
import Contact from "./pages/Contact";
import Register from './pages/Register';
import Login from './pages/Login';
import CreateGame from './pages/CreateGame';
import Winkelmandje from './pages/Shopping';
import Admin from "./pages/Admin";
// Thanks pages
import Completeshop from './pages/views/CompleteShop';
import Completeregister from './pages/views/CompleteRegister';
import Completecontact from './pages/views/CompleteContact';
import Completegame from './pages/views/CompleteGame';
import Completelogout from './pages/views/CompleteLogout';

import "./css/App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/speelgoed" exact component={Speelgoed} />
        <Route path="/speelgoed/:id" component={SpeelgoedDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/registreer" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={CreateGame} />
        <Route path="/winkelmandje" component={Winkelmandje} />
        <Route path="/admin" component={Admin} />
        {/* Thanks pages */}
        <Route path="/thanks" component={Completeshop} />
        <Route path="/completeregister" component={Completeregister} />
        <Route path="/completecontact" component={Completecontact} />
        <Route path="/completegame" component={Completegame} />
        <Route path="/completelogout" component={Completelogout} />
      </Switch>
    </Router>
  );
}

export default App;
