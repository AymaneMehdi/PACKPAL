import React from 'react';

const PrivateRoute = ({ element: Component, ...rest }) => {
  return <Component {...rest} />;
};

export default PrivateRoute;
