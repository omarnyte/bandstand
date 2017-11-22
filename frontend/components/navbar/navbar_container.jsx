import { connect } from 'react-redux';

import Navbar from './navbar';
import { login, logout, signup} from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentBand: state.session.currentBand 
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
