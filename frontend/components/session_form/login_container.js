import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LogIn from './login';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: formBand => dispatch(login(formBand)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
