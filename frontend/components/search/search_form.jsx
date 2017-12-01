import React from 'react';
import * as debounce from "lodash.debounce";

import SearchIndexContainer from './search_index_container';
import SearchResults from './search_results';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      quickSearchTimeout: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus() {
    if (this.props.path !== 'search') return this.props.history.push(`/search`);
  }

  handleChange(e) {
    clearTimeout(this.quickSearchTimeout);
    const query = e.target.value;
    this.setState({query});
    this.quickSearchTimeout = setTimeout(() => this.props.searchDB(this.state.query), 1000);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='temp-search-bar'
            type='text'
            placeholder='Search for artist, track, or album'
            value={this.state.query}
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            />
        </form>

      </div>
    );
  }
}

export default SearchForm;
