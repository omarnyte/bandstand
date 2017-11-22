import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from '.session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentBand)
  // TODO: add errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: band => dispatch(processForm(band)), formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
