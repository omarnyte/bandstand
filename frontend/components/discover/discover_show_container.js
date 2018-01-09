import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPermittedGenres } from '../../actions/discover_actions';
import DiscoverShow from './discover_show';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  fetchPermittedGenres: () => dispatch(fetchPermittedGenres())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverShow));
