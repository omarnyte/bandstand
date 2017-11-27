import React from 'react';

const BandBio = ({band}) => (
  <div className='band-bio-component'>
    <img className='band-bio-image' src={band.image_location}/>
    <div className='band-name-and-location'>
      <h2 className='mini-bio-band_name'>{band.band_name}</h2>
      <h3 class='band-location'>{band.location}</h3>
    </div>
    <p className='mini-bio'>{band.mini_bio}</p>
  </div>

);

export default BandBio;
