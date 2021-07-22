import React from "react";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route>
        <Login />
      </Route>
    </Router>
  );
}

export default App;
