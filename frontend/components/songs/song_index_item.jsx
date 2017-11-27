import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { song } = this.props;

    return (
      <li>
        {song.title}
      </li>
    );
  }
}
