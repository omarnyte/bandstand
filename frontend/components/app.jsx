import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import LogInContainer from './session_form/login_container';
import SignupContainer from './session_form/signup_container';
import BandShowContainer from './bands/band_show_container';
import AlbumPageContainer from './albums/album_page_container';
import Footer from './footer/footer';
import { AuthRoute } from '../utils/route_utils';

const App = () => (
  <div className='app-div'>
    <NavbarContainer />

    <Switch>
      <AuthRoute path='/login' component={LogInContainer} />
      <AuthRoute path='/signup' component={SignupContainer} />

      <Route path='/bands/:bandId' component={BandShowContainer}/>
      <Route path='/albums/:albumId' component={AlbumPageContainer}/>
    </Switch>

    <Footer />
  </div>
);

export default App;
