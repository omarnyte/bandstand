import React from 'react';
import { Link } from 'react-router-dom';

import SongPlayer from '../song_player/song_player';

class AlbumPage extends React.Component {
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
    const { currentAlbum } = this.props;

    // if (!currentAlbum) {
    //   return <div> No album found! </div>;
    // }

    if (!currentAlbum) return null;

    return (
      <div className='album-component'>
        <div className='album-page-left'>
          <div className='album-and-band-name'>
            <h1>{currentAlbum.name}</h1>
          </div>
          <SongPlayer />

        </div>

        <div className='album-page-mid'>
          <img
            className='current-album-cover'
            src='https://images-na.ssl-images-amazon.com/images/I/61HYU2oNOsL._SX355_.jpg'/>

        </div>

        <div className='album-page-right'>
          <img
            className='band-bio-image'
            src='http://f4.bcbits.com/img/0010184835_10.jpg'/>
          <div className='band-name-and-location'>
            <h2>Sufjan Stevens[no link]</h2>
            <h3>New York [no link]</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumPage;
