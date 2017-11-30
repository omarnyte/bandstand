import React from 'react';
import { Link } from 'react-router-dom';

import SearchContainer from '../search/search_container';

// will only be rendered if a user is logged in
const Navbar = ({ currentUser , logout, path }) => {
  const display = currentUser ? (
    <div className='right-nav'>
      <SearchContainer />
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>log out</button>
    </div>
  ) : (
    <div className='right-nav'>
      <SearchContainer />
      <ul className='session-links'>
        <Link to='/discover' className='session-link'>discover</Link>
        <Link to='/signup' className='session-link'>sign up</Link>
        <Link to='/login' className='session-link'>login</Link>
      </ul>
    </div>
  );

  // ensures that navbar doesn't render on /login or /signup
  if (path === 'login' || path === 'signup') {
    return <div></div>;
  }

  return (
    <nav className='navbar'>
      <div className='left-nav'>
        <Link to='/'>
          <img className='logo' src="https://s3-us-west-1.amazonaws.com/bandstandapp-dev/Site+Images/Bandcamp+logo.png"/>
        </Link>
          <h2 className='slogan'>Discover amazing new music, and directly support the artists who make it.</h2>
      </div>
      {display}
    </nav>
  );
};

export default Navbar;
