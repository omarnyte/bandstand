import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <input
        className='searchbar'
        type='text'
      />
    );
  }
}

export default Search;
