import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverArtistItem extends React.Component {
  render() {
    const { band_name, image_location } = this.props.band;
    return (
      <div className='discover-artist-item-div'>
        <img className='discover-artist-item-image' src={image_location} />
        <h1 className='discover-artist-band-name'>{band_name}</h1>
      </div>
    );
 }
}

export default DiscoverArtistItem;
