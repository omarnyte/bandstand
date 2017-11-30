import { connect } from 'react-redux';

import SearchIndex from './search_index';

const mapStateToProps = (state) => ({
  searchResults: state.entities.searchResults
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
