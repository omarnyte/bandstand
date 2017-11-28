import React from 'react';
import ReactHowler from 'react-howler';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: this.currentSong,
      playing: false,
      volume: 1.0
    };
    this.currentSong = this.currentSong.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSong();
  }

  currentSong() {
    const firstSong = this.props.currentSongs[0].song_location;
    return this.props.playback.song_location ? this.props.playback.song_location : firstSong;
  }


  handlePlayPause() {
    const playing = !this.state.playing;
    this.setState({playing});
  }

  handleVolumeChange(e) {
    const volume = e.target.value;
    this.setState({volume});
  }

  render () {
    const { playback } = this.props;
    return (
      <div className='media-player-component'>
        <div className='play-pause'>
          {this.state.playing ?
            <i class="fa fa-pause" aria-hidden="true" onClick={this.handlePlayPause}></i> :
            <i class="fa fa-play" aria-hidden="true" onClick={this.handlePlayPause}></i>}
        </div>

        <div className='title-and-duration'>
          <span className='t-and-d-title'>{playback.title}</span>
          <span className='t-and-d-duration'>duration</span>
        </div>
        <div>
          <input
            type='range'
            min='0'
            max='1'
            step='.01'
            value={this.state.volume}
            onChange={this.handleVolumeChange}
          />
        </div>

        <ReactHowler
          src={[playback.song_location]}
          playing={this.state.playing}
          onPause={this.state.onPause}
          volume={this.state.volume}
        />
      </div>
    );
  }
}

export default MediaPlayer;



// <i class="fa fa-fast-backward" aria-hidden="true"></i>
// <i class="fa fa-fast-forward" aria-hidden="true"></i>
