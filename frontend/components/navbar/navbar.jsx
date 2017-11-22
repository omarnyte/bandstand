import React from 'react';
import { Link } from 'react-router-dom';

// will only be rendered if no user is logged in
const sessionLinks = () => (
  <nav className='navbar logged-out'>
    <ul>
      <Link to='/discover'>Discover</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </ul>
  </nav>
);

// will only be rendered if a user is logged in (or has just signed up)
const personalGreeting = ( currentBand, logout ) => (
  <nav className='navbar'>
    <h2>Hi, {currentBand.band_name}</h2>
    <Link to='/discover'>Discover</Link>
    <Button onClick={logout}>Log Out</Button>
  </nav>
);

const Navbar = ({ currentBand, logout }) => (
  currentBand ? personalGreeting(currentBand, logout) : sessionLinks()
);

export default Navbar;
