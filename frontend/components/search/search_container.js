import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchDB } from '../../actions/search_actions';
import SearchForm from './search_form';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  searchDB: (searchQuery) => dispatch(searchDB(searchQuery))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm));
