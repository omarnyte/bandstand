import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='search-results-component'>
        <div className='band-results'>
          bands
        </div>

        <div className='album-results'>
          albums
        </div>

        <div className='song-results'>
          songs
        </div>
      </div>
    );
  }
}

export default SearchResults;
