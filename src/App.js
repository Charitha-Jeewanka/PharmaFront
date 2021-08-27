import React from "react";
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import About from "./Components/about";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route>
        <About/>
      </Route>
    </Router>
  );
}

export default App;
