import { connect } from 'react-redux';

import BandShow from './band_show';
import { selectBand } from '../../reducers/selectors';
import { fetchBand } from '../../actions/band_actions';

const mapStateToProps = (state, { match }) => {
  const bandId = parseInt(match.params.bandId);
  // TODO switch to 'currentBand' after splitting bands and users
  const currentViewedBand = selectBand(state.entities, bandId );

  return {
    currentViewedBand
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBand: (bandId) => dispatch(fetchBand(bandId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandShow);
