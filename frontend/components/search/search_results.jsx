import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchResultItem from './search_result_item';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
  const { searchResults } = this.props;

    if (!searchResults) return null; 
    return (
      <div className='search-results-component'>
        {searchResults.map(result => <SearchResultItem result={result}/>)}
      </div>
    );
  }
}

export default SearchResults;
