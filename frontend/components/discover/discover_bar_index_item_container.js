import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DiscoverBarIndexItem from './discover_bar_index_item';

const mapStateToProps = (state, {genre}) => ({
  genre 
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverBarIndexItem));
