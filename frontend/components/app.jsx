import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SplashPage from './splash_page/splash_page';
import LogInContainer from './session_form/login_container';
import SignupContainer from './session_form/signup_container';
import BandShowContainer from './bands/band_show_container';
import AlbumShowContainer from './albums/album_show_container';
import Footer from './footer/footer';
import { AuthRoute } from '../utils/route_utils';

const App = () => (
  <div className='app-div'>
    <NavbarContainer />

    <Switch>
      <AuthRoute path='/login' component={LogInContainer} />
      <AuthRoute path='/signup' component={SignupContainer} />

      <Route path='/bands/:bandId' component={BandShowContainer}/>
      <Route path='/albums/:albumId' component={AlbumShowContainer}/>
    </Switch>

    <Footer />
  </div>
);

export default App;
