import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import LogInContainer from './session_form/login_container';
import SignupContainer from './session_form/signup_container';
import Footer from './footer/footer';
import { AuthRoute } from '../utils/route_utils';

const App = () => (
  <div className='app-div'>
    <NavbarContainer />
    <AuthRoute path="/login" component={LogInContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <Footer />
  </div>
);

export default App;
