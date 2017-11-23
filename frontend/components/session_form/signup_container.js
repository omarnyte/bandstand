import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: formBand => dispatch(signup(formBand))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
