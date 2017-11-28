import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.receiveSong(this.props.song);
  }


  render () {
    const { song, currentSong } = this.props;

    return (
      <div className='song-index-item-component'>
        { currentSong.id === song.id ?
          <li
            className='song-index-item-playing'
            onClick={this.handleClick}>
            {song.title}
          </li>
          :
          <li
            className='song-index-item'
            onClick={this.handleClick}>
            {song.title}
          </li>

        }
      </div>
    );
  }
}

export default SongIndexItem;
