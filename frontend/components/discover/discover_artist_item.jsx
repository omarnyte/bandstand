import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverArtistItem extends React.Component {
  render() {
    const {image_location, band_name, genres_by_id } = this.props.band;
    const genreNames = genres_by_id.map(genreObject => {
      return genreObject.genre;
    });

    return (
      <div className='discover-artist-item-div'>
        <img className='discover-artist-item-image' src={image_location} />
        <span className='discover-artist-band-name'>{band_name}</span>
        <span className='discover-artist-subgenres'>{genreNames.join(' ')}</span>
      </div>
    );
 }
}

export default DiscoverArtistItem;
