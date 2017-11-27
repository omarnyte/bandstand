import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  selectAlbum,
  selectBand,
  selectSongsByAlbum } from '../../reducers/selectors';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchBand } from '../../actions/band_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  let currentBand = null;
  const currentAlbum = selectAlbum(state.entities, albumId);
  if (currentAlbum !== null) {
    currentBand = selectBand(state.entities, currentAlbum.band_id); 
  }
  // const currentSongs = selectSongsByAlbum(state.entities, currentAlbum);
  return {
    currentAlbum,
    currentBand,
    // currentSongs
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  fetchBand: (bandId) => dispatch(fetchBand(bandId))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow));
