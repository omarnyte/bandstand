import React from 'react';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        the current song is {this.props.playback.title}
      </div>
    );
  }
}

export default MediaPlayer;
