import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from './navbar';
import { login, logout, signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps)  => ({
  currentUser: state.session.currentUser,
  path: ownProps.location.pathname.slice(1)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
