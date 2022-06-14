import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loged } = store.getState().auth;

  return (
    <Route
      {...rest}
      render={(props) =>
        loged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
