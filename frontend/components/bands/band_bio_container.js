import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BandShow from './band_show';
import { selectBand, selectAlbumsByBand } from '../../reducers/selectors';
import { fetchBand } from '../../actions/band_actions';

const mapStateToProps = (state, { band }) => {
  return {
    band,
    currentUser: state.entities.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandShow);
