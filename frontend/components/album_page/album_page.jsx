import React from 'react';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentAlbum) {
      this.props.fetchAlbum(this.props.match.params.albumId);
    }
  }

  render() {
    const { currentAlbum } = this.props

    if (!currentAlbum) {
      return <div> No album found! </div>;
    }

    return (
      <h1>You're at {currentAlbum.id}</h1>
    );
  }
}

export default AlbumPage;
