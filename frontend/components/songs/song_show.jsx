import React from 'react';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { songs } = this.props;
    // console.log(songs);
    return (
      <div className='song-player-component'>
      </div>
    );
  }
}

export default SongShow;



// <ul>
//   {songs.map((song, idx) => <SongIndexItem key={idx} song={song} />)}
// </ul>
