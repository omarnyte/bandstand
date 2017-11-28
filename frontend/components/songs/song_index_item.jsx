import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert(`clicked ${e.target.value}`);
    this.props.receiveSong(this.props.song);
  }


  render () {
    const { song } = this.props;

    return (
      <div className='song-index-item-component'>
        <li
          className='song-index-item'
          onClick={this.handleClick}>
          {song.title}
        </li>
      </div>
    );
  }
}

export default SongIndexItem;
