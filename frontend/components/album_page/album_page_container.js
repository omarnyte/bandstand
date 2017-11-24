import { connect } from 'react-redux';

import AlbumPage from './album_page';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  return {
    albumId
  }; 
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(AlbumPage);
