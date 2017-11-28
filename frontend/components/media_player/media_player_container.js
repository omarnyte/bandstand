import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {  setFirstSong,
          clearSong,
          togglePlayPause,
          handleVolumeChange } from '../../actions/playback_actions';
import MediaPlayer from './media_player';

const mapStateToProps = (state, { currentSongs }) => ({
    currentSongs,
    playback: state.playback
});

const mapDispatchToProps = (dispatch) => ({
  setFirstSong: (currentSongs) => dispatch(setFirstSong(currentSongs)),
  clearSong: () => dispatch(clearSong()),
  togglePlayPause: () => dispatch(togglePlayPause()),
  handleVolumeChange: (e) => dispatch(handleVolumeChange(e))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaPlayer));
