import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { ROUTE_DIRECTORY } from "../../Constants/RouteDirectory";


const HomeNavigation = () => {
  return (
    <Switch>
      <Route exact path='/'><Redirect to='/home'/></Route>
      {
        ROUTE_DIRECTORY.map((routes) => (
          <PrivateRoute enableNavPane path={routes.pathname} component={routes.component}/>
        ))
      }
    </Switch>
  );
};

export default HomeNavigation;