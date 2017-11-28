import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectSongsByAlbum } from '../../reducers/selectors';
import { fetchAlbum } from '../../actions/album_actions';
import { receiveSong } from '../../actions/playback_actions';
import SongIndex from './song_index';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  const currentSongs = selectSongsByAlbum(state, state.entities.albums[albumId]);
  return {
    currentSongs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  receiveSong: (song) => dispatch(receiveSong(song))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex));
