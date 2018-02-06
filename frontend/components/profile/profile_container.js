import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfileShow from './profile_show';


const mapStateToProps = (state, { match }) => {
  // const bandId = parseInt(match.params.bandId);
  // const currentBand = selectBand(state.entities, bandId);
  // let currentAlbums = null;
  // if (currentBand) {
  //   currentAlbums = selectAlbumsByBand(state, currentBand);
  // }
  //
  // return {
  //   currentBand,
  //   bandId,
  //   currentAlbums,
  // };
};

const mapDispatchToProps = (dispatch) => ({
  // fetchBand: (bandId) => dispatch(fetchBand(bandId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow));
