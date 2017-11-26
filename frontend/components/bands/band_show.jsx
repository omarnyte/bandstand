import React from 'react';

import AlbumIndex from '../albums/album_index';
import BandBio from './band_bio';

class BandShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBand(this.props.match.params.bandId);
  }

  componentWillReceiveProps(nextProps) {
    // if (!this.props.currentBand) {
    //   this.props.fetchBand(nextProps.match.params.bandId);
    // }
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchBand(nextProps.match.params.bandId);
    }
  }

  render () {
    const { currentBand, albums } = this.props;
    // debugger
    // if (!currentBand) return null;
    // if (!albums) return null;

    if (!currentBand) return null;

    return (
      <div className='band-show-component'>
        <div className='album-index-and-band-bio'>
          <AlbumIndex albums={albums}/>
          <BandBio band={currentBand} />
        </div>
      </div>

    );
  }
}


export default BandShow;
