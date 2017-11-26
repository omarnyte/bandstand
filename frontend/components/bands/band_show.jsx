import React from 'react';

import AlbumIndex from '../albums/album_index';
import BandBio from './band_bio';

class BandShow extends React.Component {
  componentDidMount() {
    this.props.fetchBand(this.props.match.params.bandId);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.currentViewedBand) {
      this.props.fetchBand(nextProps.match.params.bandId);
    }
  }

  render () {
    return (
      <div className='band-show-component'>
        <div className='album-index-and-band-bio'>
          <AlbumIndex />
          <BandBio />
        </div>
      </div>

    );
  }

}

export default BandShow;
