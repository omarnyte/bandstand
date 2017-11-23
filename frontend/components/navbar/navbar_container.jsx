import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 

import Navbar from './navbar';
import { login, logout, signup} from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentBand: state.session.currentBand
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
