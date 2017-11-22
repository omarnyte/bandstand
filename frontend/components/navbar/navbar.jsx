import React from 'react';
import { Link } from 'react-router-dom';

// will only be rendered if no user is logged in
const Navbar = ({ currentBand, logout }) => {
  const display = currentBand ? (
    <div>
      <p>Hello, {currentBand.band_name}</p>
      <button onClick={logout}>log out</button>
    </div>
  ) : (
    <div>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
  return (
    <header>
      <h1>bandstand[logo]</h1>
      <div>
        {display}
      </div>
    </header>
  );
};

export default Navbar;
