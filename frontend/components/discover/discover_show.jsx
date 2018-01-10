import React from 'react';
import { Link } from 'react-router-dom';

import DiscoverBar from './discover_bar';
import DiscoverArtistIndexContainer from './discover_artist_index_container';

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
      <div className='discover-show-div'>
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
