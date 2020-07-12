import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Save";
import "./App.css";

function App() {
  return (

    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/save" component={Saved} />
        <Route exact path="/save/:id" component={Saved} />
        <Route component={null} />
      </Switch>

    </Router>
  );
}

export default App;
