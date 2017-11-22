import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import LogInContainer from './session_form/login_container';
import SignupContainer from './session_form/signup_container';
import { AuthRoute } from '../util/route_utils';

const App = () => (
  <div>
    <h1>bandstand</h1>

    <Route path='/' component={NavbarContainer} />
    <AuthRoute path="/login" component={LogInContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);

export default App;
