import React from 'react';
import { Link } from 'react-router-dom';

import DiscoverBar from './discover_bar';
import DiscoverBarIndexContainer from './discover_bar_index_container';
import DiscoverBarIndex from './discover_bar_index';
import DiscoverArtistIndexContainer from './discover_artist_index_container';
// import DiscoverArtistIndex from './discover_artist_index';

const genreNames = [
  'all',
  'grunge',
  'hip hop',
  'house',
  'indie',
  'metal',
  'pop',
  'rap',
  'R&B',
  'rock'
];

class DiscoverShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenreIndex: 0
    };
    this.selectGenre = this.selectGenre.bind(this);
  }

  componentDidMount() {
    this.props.fetchBandsByGenre('all');
  }

  selectGenre(idx) {
    this.setState({selectedGenreIndex: idx});
    this.props.fetchBandsByGenre(genreNames[idx]);
  }

  render () {
    return (
      <div>
        <DiscoverBar
          genreNames={genreNames}
          selectedGenreIndex={this.state.selectedGenreIndex}
          onGenreChosen={this.selectGenre} />
        <DiscoverArtistIndexContainer />
      </div>
        );

  }
}

export default DiscoverShow;
