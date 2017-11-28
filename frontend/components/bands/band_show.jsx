import React from 'react';
import { withRouter } from 'react-router-dom';

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
    if (this.props.match.params.bandId !== nextProps.match.params.bandId) {
      this.props.fetchBand(nextProps.match.params.bandId);
    }
  }

  render () {
    const { currentBand, currentAlbums } = this.props;


    if (!currentBand) return null;

    return (
      <div className='band-show-component'>
        <h1 className='band-name-header'>{currentBand.band_name}</h1>
        <div className='album-index-and-band-bio'>
          <AlbumIndex albums={currentAlbums}/>
          <BandBio band={currentBand} />
        </div>
      </div>

    );
  }
}


export default withRouter(BandShow);
