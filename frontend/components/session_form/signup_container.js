import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: formBand => dispatch(signup(formBand)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
