import React from 'react';
import { Link } from 'react-router-dom';

// import SongShow from '../songs/song_show';
// import SongIndexContainer from '../songs/song_index_container';
import SongIndex from '../songs/song_index';
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
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {

      this.props.fetchAlbum(nextProps.match.params.albumId);
    }

    // if (!nextProps.currentAlbum) {
    //   this.props.fetchAlbum(nextProps.match.params.albumId);
    // }
  }

  render() {
    const { currentSongs, currentAlbum, currentBand } = this.props;
    if (!currentAlbum) {
      return null;
    }

    return (
      <div className='album-show-component'>
        <div className='album-show-box'>
          <div className='album-page-left'>
            <div className='album-and-band-name'>
              <h1>{currentAlbum.name}</h1>
              <h2>by
                <Link to={`/bands/${currentBand.id}`}>
                  <strong className='link-to-band'> {currentBand.band_name}</strong>
                </Link>
              </h2>


            </div>
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

export default AlbumShow;
