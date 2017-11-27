import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert(`clicked ${e.target.value}`);
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
