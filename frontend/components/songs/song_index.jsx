import React from 'react';

import SongIndexItemContainer from './song_index_item_container';
// import SongIndexItem from './song_index_item';
// import SongIndexItemContainer from './song_index_item_container';


class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchAlbum(this.props.match.params.albumId);
  // }
  //
  // componentWillReceiveProps(nextProps)  {
  //   if (!nextProps.currentAlbum) {
  //     this.props.fetchAlbum(nextProps.match.params.albumId);
  //   }
  // }

  render() {
    const { currentSongs } = this.props;

    if (currentSongs.length < 1) return <h1>Albums doesn't have any songs!</h1>;

    return (
      <div>
        <ol>
          {currentSongs.map(song => (
            <SongIndexItemContainer key={song.id} song={song} />
          ))}
        </ol>
      </div>
    );
  }
}

export default SongIndex;
