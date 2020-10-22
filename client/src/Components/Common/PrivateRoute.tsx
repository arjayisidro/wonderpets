import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IRootState, Dispatch } from '../../Store/GlobalStore';
import { connect } from 'react-redux';

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

const mapProps = (state: IRootState) => {
  return {
    isAuthenticated: state.loginStore.isAuthenticated,
  };
};

export default connect(mapProps)(PrivateRoute);
