import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProfileShow from './profile_show';


const mapStateToProps = (state, { match }) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow));
