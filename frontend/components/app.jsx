import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SignupContainer from './session_form/signup_container';
const App = () => (
  <div>
    <h1>bandstand</h1>

    <Route path='/' component={NavbarContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;
