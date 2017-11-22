import React from 'react';
import { Link } from 'react-router-dom';

// will only be rendered if no user is logged in
const sessionLinks = () => (
  <nav>
    <Link to='/login'>Login</Link>
    &nbsp;or&nbsp;
    <Link to='/signup'>Sign Up</Link>
  </nav>
);

// will only be rendered if a user is logged in (or has just signed up)
const personalGreeting = ( currentBand, logout ) => (
  <nav>
    <h2>Hi, {currentBand.band_name}</h2>
    <Button onClick={logout}>Log Out</Button>
  </nav>
);

const Navbar = ({ currentBand, logout }) => (
  currentBand ? personalGreeting(currentBand, logout) : sessionLinks()
);

export default Navbar;
