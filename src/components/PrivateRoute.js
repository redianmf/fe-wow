import React from 'react';

import { Route, Redirect } from 'react-router-dom';

// create component here
export default function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = true;
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isLogin ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
}