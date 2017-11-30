import React from 'react';

import SearchIndexContainer from './search_index_container';
import SearchResults from './search_results';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // const searchQuery = e.target.value;
    // this.setState({searchQuery});
    e.preventDefault();
    this.props.searchDB(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search`);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='temp-search-bar'
            type='text'
            placeholder='Search for artist, track, or album'
            onChange={this.handleChange}
            />
        </form>

      </div>
    );
  }
}

export default SearchForm;

// <input
//   className='temp-search-bar'
//   type='text'
//   placeholder='Search for artist, track, or album'
//   onChange={this.handleChange}
//   onSubmit={this.handleSubmit}
//   />
