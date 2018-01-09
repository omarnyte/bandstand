import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBandsByGenre } from '../../actions/discover_actions';
import DiscoverArtistIndex from './discover_artist_index';

const mapStateToProps = (state) => ({
  bands: state.entities.discoverBands
});

const mapDispatchToProps = dispatch => ({
  fetchBandsByGenre: (genre) => dispatch(fetchBandsByGenre(genre))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverArtistIndex));
