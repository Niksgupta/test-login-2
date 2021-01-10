import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom"

import Main from "./components/Main"
import Feed from "./components/Feed"
import Login from "./components/Login"
import Register from "./components/Register"




export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Main />
          </Route>
          <Route  path="/Feed">
          <Feed />
          </Route>
          <Route  path="/Login">
          <Login />
          </Route>
          <Route  path="/Register">
          <Register />
          </Route>
                    </Switch>
        </Router>
    </div>
  );
}
