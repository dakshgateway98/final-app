import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from '../Components/Login/Login';
import SignUp from "../Components/Login/SignUp";
import { Dashboard } from "../Components/Dashboard/Dashboard";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route component={Login} path="/login" />
          <Route component={SignUp} path="/signup" />
          <Route component={Dashboard} path="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
