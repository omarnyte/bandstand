import * as SearchAPIUtil from '../utils/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const searchDB = (query) => (dispatch) => (
  SearchAPIUtil.searchDB(query).then(
    results => dispatch(receiveSearchResults(results)))
);

const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});
