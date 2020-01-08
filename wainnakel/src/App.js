import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Restaurant from "./Pages/Restaurant";
import Error from "./Pages/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Restaurant" component={Restaurant} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
