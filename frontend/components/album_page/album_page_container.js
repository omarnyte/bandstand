import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectAlbum } from '../../reducers/selectors';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumPage from './album_page';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  const currentAlbum = selectAlbum(state.entities, albumId);
  return {
    currentAlbum
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
});
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage));
