import React from 'react';

import SongIndexItem from './song_index_item';

class SongIndexContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(nextProps)  {
    if (!nextProps.currentAlbum) {
      this.props.fetchAlbum(nextProps.match.params.albumId);
    }
  }

  render() {
    const { currentSongs } = this.props;

    if (currentSongs.length < 1) return <h1>Albums doesn't have any songs!</h1>;

    return (
      <div>
        <ol>
          {currentSongs.map(song => (
            <SongIndexItem key={song.id} song={song} />
          ))}
        </ol>
      </div>
    );
  }
}

export default SongIndexContainer;
