import React from 'react';
import { Link } from 'react-router-dom';

import DiscoverArtistItem from './discover_artist_item';

class DiscoverArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchBandsByGenre('all');
  }

  render() {
    const { bands } = this.props;
    if (Object.keys(bands).length === 0) return null;

    return (
    <div className='discover-artist-index-outer-div'>
      <div className='discover-artist-index-div'>
        {
          Object.keys(bands).map((bandId) => (
            <DiscoverArtistItem
              key={bandId}
              band={bands[bandId]} />
            ))
        }
      </div>
    </div>
    );
  }
}

export default DiscoverArtistIndex;
