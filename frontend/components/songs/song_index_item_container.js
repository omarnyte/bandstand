import { connect } from 'react-redux';

import { selectSong } from '../../reducers/selectors';
import { receiveSong } from '../../actions/playback_actions';
import SongIndexItem from './song_index_item';

const mapStateToProps = (state, { song }) => ({
  song,
  currentSong: state.playback

});

const mapDispatchToProps = (dispatch) => ({
  receiveSong: (song) => dispatch(receiveSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);
