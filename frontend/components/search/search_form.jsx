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
    this.handleFocus = this.handleFocus.bind(this); 
  }

  handleFocus() {
    if (this.props.path !== 'search') return this.props.history.push(`/search`);
  }

  handleChange(e) {
    this.props.searchDB(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    // if (this.props.path !== 'search') return this.props.history.push(`/search`);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='temp-search-bar'
            type='text'
            placeholder='Search for artist, track, or album'
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            />
        </form>

      </div>
    );
  }
}

export default SearchForm;
