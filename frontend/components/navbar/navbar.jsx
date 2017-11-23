import React from 'react';
import { Link } from 'react-router-dom';

// will only be rendered if a user is logged in
const Navbar = ({ currentBand, logout }) => {
  const display = currentBand ? (
    <div>
      <p>Hello, {currentBand.band_name}</p>
      <button onClick={logout}>log out</button>
    </div>
  ) : (
    <ul className='session-links'>
      <Link to='/discover' className='session-link'>discover</Link>
      <Link to='/signup' className='session-link'>sign up</Link>
      <Link to='/login' className='session-link'>login</Link>
    </ul>
  );
  return (
    <nav className='navbar'>
      <h1 className='logo'>bandstand[logo]</h1>
      <div>
        {display}
      </div>
    </nav>
  );
};

export default Navbar;
