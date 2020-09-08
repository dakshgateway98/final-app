import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoutesForLogin = ({ component: Component, ...rest }) => {
  //console.log(rest)
  return (
    <Route {...rest} render={(props) => (
      localStorage.getItem('userToken')
      ?
        <Component {...props} {...rest} /> 
      :
        <Redirect to="/" />
    )}>
    </Route>
  )
}
export default PrivateRoutesForLogin;