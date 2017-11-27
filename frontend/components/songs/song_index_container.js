import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectSongsByAlbum } from '../../reducers/selectors';
import { fetchAlbum } from '../../actions/album_actions';
import SongIndex from './song_index';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  const currentSongs = selectSongsByAlbum(state, state.entities.albums[albumId]);
  return {
    currentSongs
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => fetchAlbum(albumId)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex));
