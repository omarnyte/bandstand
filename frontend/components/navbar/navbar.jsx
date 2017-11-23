import React from 'react';
import { Link } from 'react-router-dom';

// will only be rendered if a user is logged in
const Navbar = ({ currentBand, logout, path }) => {
  const display = currentBand ? (
    <div className='right-nav'>
      <input
        className='temp-search-bar'
        type='text'
        placeholder='Search for artist, track, or album'/>
      <p>Hello, {currentBand.band_name}</p>
      <button onClick={logout}>log out</button>
    </div>
  ) : (
    <div className='right-nav'>
      <input
        className='temp-search-bar'
        type='text'
        placeholder='Search for artist, track, or album'/>
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
        <img className='logo' src="http://www.drunkenwerewolf.com/wp-content/uploads/2017/04/Bandcamp.png"/>
        <h2 className='slogan'>Discover amazing new music, and directly support the artists who make it.</h2>
      </div>
      {display}
    </nav>
  );
};

export default Navbar;
