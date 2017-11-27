import React from 'react';
import { Link } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';
import Spotlight from './spotlight';

const SplashPage = ({ currentBand, logout }) => {
  return (
    <div>
      <NavbarContainer currentBand={currentBand} logout={logout} />
      <Spotlight />
    </div>
  );
};

export default SplashPage;
