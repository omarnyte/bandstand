import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { searchDB } from '../../actions/search_actions';
import SearchResults from './search_results';

const mapStateToProps = (state) => ({
  // bandResults: state.entities.searchResults.bands,
  // albumResults: state.entities.searchResults.bands,
  // songResults: state.entities.searchResults.bands
  searchResults: state.entities.searchResults.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  searchDB: (searchQuery) => dispatch(searchDB(searchQuery))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults));
