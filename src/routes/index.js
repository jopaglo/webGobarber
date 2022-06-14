import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import PageNotFound from '../pages/PageNotFound';

import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/profile" exact component={Profile} />
      <Route path="/" exact component={PageNotFound} />
    </Switch>
  );
}
