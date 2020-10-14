import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import NavPane from '../NavPane/NavPane';

const isLogin = () => {
  return true;
}

const renderAuthorizedComponent = (AuthorizedComponent, props, enableNavPane) => {
  return (
    <div className='component-wrapper'>
      { enableNavPane && <NavPane />}
      <AuthorizedComponent {...props}/>
    </div>
  );
};

const PrivateRoute = ({component: AuthorizedComponent, ...parentProps}) => {
  return (
    <Route
      {...parentProps}
      render={(props) => (
        isLogin()
          ? (
            <>
              {renderAuthorizedComponent(AuthorizedComponent, props, parentProps.enableNavPane)}
            </>
          )
          : <Redirect to='/'/>
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any
};

export default PrivateRoute;