import React from 'react';

import { selectSong } from '../../reducers/selectors';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert(`clicked ${e.target.value}`);
    // this.props.receiveSong(this.song);
  }


  render () {
    const { song } = this.props;

    return (
      <div className='song-index-item-component'>
        <li
          className='song-index-item'
          value={song.id}
          onClick={this.handleClick}>
          {song.title}
        </li>
      </div>
    );
  }
}

export default SongIndexItem;
