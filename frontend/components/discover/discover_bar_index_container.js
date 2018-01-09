import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DiscoverBarIndex from './discover_bar_index';
import { fetchPermittedGenres } from '../../actions/discover_actions';

const mapStateToProps = (state, ownProps) => ({
  genres: state.entities.discoverBands
});

const mapDispatchToProps = dispatch => ({
  fetchPermittedGenres: () => dispatch(fetchPermittedGenres())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverBarIndex));
