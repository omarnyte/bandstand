import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import BandShow from './band_show';
import BandBio from './band_bio';
import { selectBand, selectAlbumsByBand } from '../../reducers/selectors';
import { fetchBand, followBand, unfollowBand } from '../../actions/band_actions';

const mapStateToProps = (state, { band }) => {
  return {
    band,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBand: (bandId) => fetchBand(bandId),
  followBand: (bandId) => dispatch(followBand(bandId)),
  unfollowBand: (bandId) => dispatch(unfollowBand(bandId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandBio);
