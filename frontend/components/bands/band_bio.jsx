import React from 'react';

const BandBio = ({band}) => (
  <div className='band-bio-component'>
    <img className='band-bio-image' src={band.image_location}/>
    <div className='band-name-and-location'>
      <h2 className='band_names'>{band.band_name}</h2>
      <h3>{band.location}</h3>
    </div>
    <p className='mini-bio'>{band.mini_bio}</p>
  </div>

);

export default BandBio;
