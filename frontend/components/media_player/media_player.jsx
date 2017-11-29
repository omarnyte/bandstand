import React from 'react';
import ReactHowler from 'react-howler';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
    };
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.getSeek = this.getSeek.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  componentDidMount() {
    this.props.setFirstSong(this.props.currentSongs);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
      this.props.setFirstSong(nextProps.currentSongs);
    }
  }

  handleOnLoad() {
    let duration = Math.floor(this.player.duration);
    this.setState({duration: this.player.duration()});
  }

  getDuration() {
    return this.player.duration();
  }

  formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    return (minutes < 10 ? `0${minutes}` : minutes) + ':' + (seconds < 10 ? `0${seconds}` : seconds);
  }

  getSeek () {
    return this.player.seek();
  }

  render() {
    const {playback} = this.props;
    if (playback.length === 0) return null;

    return (
      <div className='media-player-component'>
        <ReactHowler
          preload='true'
          onLoad={this.handleOnLoad}
          src={[playback.song_location]}
          playing={playback.currently_playing}
          volume={playback.volume}
          ref={(ref) => (this.player = ref)}
          />

        <div className='play-pause'>
          {playback.currently_playing ?

            <i class="fa fa-pause" aria-hidden="true" onClick={this.props.togglePlayPause}></i> :
            <i class="fa fa-play" aria-hidden="true" onClick={this.props.togglePlayPause}></i>}
        </div>

        <div className='title-and-progress'>
          <div className='title-with-duration'>
            <span className='t-and-d-title'>{playback.title}</span>
            <span className='t-and-d-duration'>{this.formatTime(this.state.duration)}</span>
          </div>

          <input
            className='volume-range'
            type='range'
            min='0'
            max='1'
            step='.01'
            value={playback.volume}
            onChange={this.props.handleVolumeChange}
            />
        </div>


      </div>
    );
  }

}

export default MediaPlayer;
// {this.player.howlerState() === 'loaded' ? <span className='duration-span'>{this.getDuration()}</span> : <div></div> }
// {playback.currently_playing ? <span className='duration-span'>{this.player.howlerState()}</span> : <div></div> }
// {playback.currently_playing ? <span className='duration-span'>{this.getSeek()}</span> : <div></div> }


// {playback.currently_playing ? <span className='duration-span'>{this.getDuration()}</span> : <div></div> }

// {playback.currently_playing ? <span className='duration-span'>{this.getDuration()}</span> : <div></div> }
// {playback.currently_playing ? <span className='duration-span'>{this.player.howlerState()}</span> : <div></div> }
// {playback.currently_playing ? <span className='duration-span'>{this.getSeek()}</span> : <div></div> }

// <input
//   className='progress-range'
//   type='range'
//   min='0'
//   max='300'
//   step='1'
// />
