import React from 'react';
import { Link, withRouter } from 'react-router-dom';


import SongPlayer from '../song_player/song_player';
import BandBio from '../bands/band_bio';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  // ensures that a fetch attempt occurs even if a user visits the album
  // page via the url
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.match.params.albumId !== nextProps.match.params.albumID) {
    //   this.props.fetchAlbum(this.props.match.params.albumId);
    // }
    if (!nextProps.currentAlbum) {
      this.props.fetchAlbum(this.props.match.params.albumId);
    }
  }

  render() {
    const { currentAlbum, currentBand } = this.props;
    // if (!currentAlbum) {
    //   return <div> No album found! </div>;
    // }

    if (!currentAlbum) return null;

    return (
      <div className='album-show-component'>
        <div className='album-show-box'>
          <div className='album-page-left'>
            <div className='album-and-band-name'>
              <h1>{currentAlbum.name}</h1>
              <h2>by {currentBand.band_name}</h2>
            </div>
            <SongPlayer album={currentAlbum}/>
            <p className='album-description'>
              {currentAlbum.description}
            </p>

          </div>

          <div className='album-page-mid'>
            <img
              className='current-album-cover'
              src={currentAlbum.image_location}/>

          </div>

          <div className='album-page-right'>
            <BandBio band={currentBand} />
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(AlbumShow);
