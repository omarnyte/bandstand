import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LogIn from './login';

const mapDispatchToProps = dispatch => ({
  signup: formBand => dispatch(login(formBand))
});

export default connect(
  null,
  mapDispatchToProps
)(LogIn);
