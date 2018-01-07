import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SplashPageContainer from './splash_page/splash_page_container';
import SplashPage from './splash_page/splash_page';
import DiscoverShowContainer from './discover/discover_show_container';
import LogInContainer from './session_form/login_container';
import SignupContainer from './session_form/signup_container';
import BandShowContainer from './bands/band_show_container';
import AlbumShowContainer from './albums/album_show_container';
import SearchResultsContainer from './search/search_results_container';
import Footer from './footer/footer';
import { AuthRoute } from '../utils/route_utils';

const App = () => (
  <div className='app-div'>
    <NavbarContainer />
    <Route exact path='/' component={SplashPageContainer}/>
    <Route exact path='/' component={DiscoverShowContainer}/>

    <Switch>
      <AuthRoute path='/login' component={LogInContainer} />
      <AuthRoute path='/signup' component={SignupContainer} />

      <Route path='/bands/:bandId' component={BandShowContainer}/>
      <Route path='/albums/:albumId' component={AlbumShowContainer}/>
      <Route path='/search' component={SearchResultsContainer}/>

    </Switch>

    <Footer />
  </div>
);

export default App;
