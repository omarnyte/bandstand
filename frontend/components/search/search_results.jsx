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
        <div className='search-results-box'>
          {searchResults.map((result, idx) => <SearchResultItem key={idx} result={result}/>)}
        </div>
      </div>
    );
  }
}

export default SearchResults;
