import React from 'react';
import { Link } from 'react-router-dom';

// import SongShow from '../songs/song_show';
// import SongIndexContainer from '../songs/song_index_container';
import SongIndex from '../songs/song_index';
import MediaPlayerContainer from '../media_player/media_player_container';
// import BandBio from '../bands/band_bio';
import BandBio from '../bands/band_bio';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
  }

  render() {
    const { currentSongs, currentAlbum, currentBand } = this.props;
    if (!currentAlbum) {
      return null;
    }
    // Line 49 ensures that media player only renders when an album has songs.
    // Helps prevent an issue where the page had to be refreshed
    // in order to render songs.

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

              {currentSongs.length > 0 &&
                <MediaPlayerContainer currentSongs={currentSongs} />
              }
              <SongIndex currentSongs={currentSongs}/>

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
