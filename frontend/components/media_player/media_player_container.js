import { connect } from 'react-redux';

import MediaPlayer from './media_player';

const mapStateToProps = (state) => ({
  playback: state.playback
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaPlayer);
