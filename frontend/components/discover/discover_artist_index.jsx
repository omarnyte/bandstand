import React from 'react';
import { Link } from 'react-router-dom';

import DiscoverArtistItem from './discover_artist_item';

class DiscoverArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('cdm', Object.keys(this.props.bands));
    // this.props.fetchBandsByGenre('all');
  }

  render() {
    const { bands } = this.props;
    if (Object.keys(bands).length === 0) return null;

    return (

      <div className='discover-artist-index-div'>
        {
          Object.keys(bands).map((bandId) => (
             <DiscoverArtistItem
              key={bandId}
              band={bands[bandId]} />
            ))
          }
      </div>
    );
  }
}

export default DiscoverArtistIndex;

// {
//   Object.keys(bands).map(band => console.log('band'))
// }
