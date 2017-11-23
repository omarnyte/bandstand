import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LogIn from './login';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  signup: formBand => dispatch(login(formBand))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
