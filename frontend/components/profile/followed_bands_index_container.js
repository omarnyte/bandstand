import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchFollowedBands } from '../../actions/band_actions';
import FollowedBandsIndex from './followed_bands_index';


const mapStateToProps = (state) => ({
  bands: state.entities.bands
});

const mapDispatchToProps = (dispatch) => ({
  fetchFollowedBands: (userId) => dispatch(fetchFollowedBands(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowedBandsIndex));
