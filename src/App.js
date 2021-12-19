import React from "react";
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import About from "./Components/about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/about">
          <About />
        </Route>

      </Switch>
    </Router>
  );
}
//commetnt
export default App;
