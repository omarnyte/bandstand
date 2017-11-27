import React from 'react';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { songs }= this.props;

    return (
      <div className='song-player-component'>
        <ul>
          {songs.map((song, idx) => <SongIndexItem key={idx} song={song} />)}
        </ul>
      </div>
    );
  }
}

export default SongShow;
