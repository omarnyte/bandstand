import { connect } from 'react-redux';

import { clearSong } from '../../actions/playback_actions';
import MediaPlayer from './media_player';

const mapStateToProps = (state) => ({
  playback: state.playback
});

const mapDispatchToProps = (dispatch) => ({
  clearSong: () => dispatch(clearSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaPlayer);
