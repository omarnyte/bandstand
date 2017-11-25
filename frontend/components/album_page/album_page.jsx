import React from 'react';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // page via the url
  // ensures that a fetch attempt occurs even if a user visits the album
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentAlbum) {
      this.props.fetchAlbum(this.props.match.params.albumId);
    }
  }

  render() {
    const { currentAlbum } = this.props;

    if (!currentAlbum) {
      return <div> No album found! </div>;
    }

    return (
      <div className='album-component'>
        <div className='album-page-left'>
          <h1 className='current-album-name'>{currentAlbum.name}</h1>
          <h2 className='current-album-band-name'>{currentAlbum.band_name}</h2>
        </div>
        <img
          className='current-album-cover'
          src='https://images-na.ssl-images-amazon.com/images/I/61HYU2oNOsL._SX355_.jpg'/>
      </div>
    );
  }
}

export default AlbumPage;
