import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DiscoverBarIndex from './discover_bar_index';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverBarIndex));