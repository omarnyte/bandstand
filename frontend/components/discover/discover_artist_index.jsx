import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBandsByGenre('all');
  }

  render() {

    return (
      <div className='discover-artist-index-div'>
        in the discover artist index
      </div>
    );
  }
}

export default DiscoverArtistIndex;
