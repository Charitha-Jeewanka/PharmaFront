import React from "react";
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route>
        <Signin/>
      </Route>
    </Router>
  );
}

export default App;
