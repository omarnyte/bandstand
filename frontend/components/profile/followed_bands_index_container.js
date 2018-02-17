import { connect } from 'react-redux';

import FollowedBandsIndex from './followed_bands_index';


const mapStateToProps = (state) => ({
  bands: state.entities.bands
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowedBandsIndex);
