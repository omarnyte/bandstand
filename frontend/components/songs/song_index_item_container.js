import connect from 'react-redux';

import { selectSong } from '../../reducers/selectors';
import { receiveSong } from '../../actions/playback_actions';
import SongIndexItem from './song_index_item';

const mapStateToProps = (state, { song }) => {
  const currentSong = song;
  return {
    currentSong
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveSong: (song) => receiveSong(song)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);
