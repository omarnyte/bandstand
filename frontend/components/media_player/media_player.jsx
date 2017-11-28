import React from 'react';
import ReactHowler from 'react-howler';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setFirstSong(this.props.currentSongs);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.albumId !== nextProps.match.params.albumId) {
  //     this.props.setFirstSong(nextProps.currentSongs);
  //   }
  // }

  render() {
    const {playback} = this.props;
    // console.log(playback);
    // console.log(this.props);

    if (!playback) return null;

    return (
      <div className='media-player-component'>
        <ReactHowler
          src={[playback.song_location]}
          playing={playback.currently_playing}
          volume={playback.volume}
          ref={(ref) => (this.player = ref)}
          />

          <div className='title-and-duration'>
            <span className='t-and-d-title'>{playback.title}</span>
          </div>

          <input
            type='range'
            min='0'
            max='1'
            step='.01'
            value={playback.volume}
            onChange={this.props.handleVolumeChange}
            />


        <div className='play-pause'>
          {playback.currently_playing ?
            <i class="fa fa-pause" aria-hidden="true" onClick={this.props.togglePlayPause}></i> :
            <i class="fa fa-play" aria-hidden="true" onClick={this.props.togglePlayPause}></i>}
        </div>

      </div>
    );
  }

}

export default MediaPlayer;



// <i class="fa fa-fast-backward" aria-hidden="true"></i>
// <i class="fa fa-fast-forward" aria-hidden="true"></i>



// constructor(props) {
//   super(props);
//   this.state = {
//     currentSong: this.currentSong,
//     playing: this.props.playback.currently_playing,
//     volume: 1.0
//   };
//   this.currentSong = this.currentSong.bind(this);
//   this.handlePlayPause = this.handlePlayPause.bind(this);
//   this.handleVolumeChange = this.handleVolumeChange.bind(this);
//   this.getDuration = this.getDuration.bind(this);
// }
//
// componentWillUnmount() {
//   this.props.clearSong();
// }
//
// currentSong() {
//   const firstSong = this.props.currentSongs[0].song_location;
//   return this.props.playback.song_location ? this.props.playback.song_location : firstSong;
// }
//
// handlePlayPause() {
//   const playing = !this.state.playing;
//   this.setState({playing});
// }
//
// handleVolumeChange(e) {
//      //   const volume = e.target.value;
//   this.setState({volume});
// }
//
// getDuration () {
// this.player.duration();
// }
//
// render () {
//   const { playback } = this.props;
//
//   return (
//     <div className='media-player-component'>
//       <span>Duration: {this.getDuration}</span>
//
//

//       </div>
//       <div>
//
//       <ReactHowler
//         src={[playback.song_location]}
//         playing={playback.currently_playing}
//         onPause={this.state.onPause}
//         volume={this.state.volume}
//       />
//     </div>
//   );
// }
