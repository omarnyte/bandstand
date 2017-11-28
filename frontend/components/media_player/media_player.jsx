import React from 'react';
import ReactHowler from 'react-howler';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSong();
  }

  handlePlayPause() {
    const playing = !this.state.playing;
    this.setState({playing});
  }

  render () {
    return (
      <div>
        <div>
          {this.state.playing ?
            <i class="fa fa-pause" aria-hidden="true" onClick={this.handlePlayPause}></i> :
            <i class="fa fa-play" aria-hidden="true" onClick={this.handlePlayPause}></i>}
        </div>
        the current song is {this.props.playback.title}
        <ReactHowler
          src={[this.props.playback.song_location]}
          playing={this.state.playing}
          onPause={this.state.onPause}
        />

      <span onClick={this.handlePause}>pause</span>

      </div>
    );
  }
}

export default MediaPlayer;
