import React from 'react';

const BandBio = ({band}) => (
  <div className='band-bio-component'>
    <img className='band-bio-image' src={band.image_location}/>
    <div className='band-name-and-location'>
      <h2 className='mini-bio-band-name'>{band.band_name}</h2>
      <h3 className='band-location' id='band-location'>{band.location}</h3>
      <button
        className='follow-unfollow'>
        Follow
      </button>
    </div>
    <p className='mini-bio'>{band.mini_bio}</p>
  </div>

);

export default BandBio;
