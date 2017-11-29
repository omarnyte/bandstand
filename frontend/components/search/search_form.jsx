import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <input
          className='temp-search-bar'
          type='text'
          placeholder='Search for artist, track, or album'
        />
      </div>
    );
  }
}

export default SearchForm;
