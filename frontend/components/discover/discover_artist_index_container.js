import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DiscoverArtistIndex from './discover_artist_index';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverArtistIndex));
