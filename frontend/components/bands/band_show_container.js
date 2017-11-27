import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BandShow from './band_show';
import { selectBand, selectAlbumsByBand } from '../../reducers/selectors';
import { fetchBand } from '../../actions/band_actions';

const mapStateToProps = (state, { match }) => {
  const bandId = parseInt(match.params.bandId);
  const currentBand = selectBand(state.entities, bandId);

  const albums = selectAlbumsByBand(state, currentBand);

  return {
    currentBand,
    bandId,
    albums
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBand: (bandId) => dispatch(fetchBand(bandId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BandShow));
