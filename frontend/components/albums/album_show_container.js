import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectAlbum, selectBand } from '../../reducers/selectors';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchBand } from '../../actions/band_actions';
import AlbumShow from './album_show';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  const currentAlbum = selectAlbum(state.entities, albumId);
  const currentBand = selectBand(state.entities, currentAlbum.band_id);
  return {
    currentAlbum,
    currentBand
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
