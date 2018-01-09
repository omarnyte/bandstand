import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBandsByGenre} from '../../actions/discover_actions';
import DiscoverShow from './discover_show';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  fetchBandsByGenre: (genre) => dispatch(fetchBandsByGenre(genre))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverShow));
