import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DiscoverShow from './discover_show';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverShow));
