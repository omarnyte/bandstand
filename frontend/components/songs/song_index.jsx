import React from 'react';

import SongIndexItemContainer from './song_index_item_container';
// import SongIndexItem from './song_index_item';
// import SongIndexItemContainer from './song_index_item_container';


class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNoSongs(currentSongs) {
    if (currentSongs.length === 0) {
      return(
        <div className='no-songs'>
          <img src='https://pixabay.com/get/ef3cb0092cfd1c22d9584518a33219c8b66ae3d018b311469cf6c27a/room-691649_1920.jpg' />
          <h1>Album doesn't have any songs!</h1>
        </div>
      );
    }
  }

  render() {
    const { currentSongs } = this.props;
    if (currentSongs.length === 0) this.renderNoSongs(currentSongs);

    return (
      <div>
        {this.renderNoSongs(currentSongs)}
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
