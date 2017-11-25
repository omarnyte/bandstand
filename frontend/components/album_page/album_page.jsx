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
      <div>
        <h1>{currentAlbum.id}</h1>
      </div>
    );
  }
}

export default AlbumPage;
