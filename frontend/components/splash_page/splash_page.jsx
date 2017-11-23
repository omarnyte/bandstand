import React from 'react';
import { Link } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';

const SplashPage = ({ currentBand, logout }) => {
  return (
    <div>
      <NavbarContainer currentBand={currentBand} logout={logout} /> 
    </div>
  );
};

export default SplashPage;
