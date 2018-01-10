import React from 'react';
import { Link } from 'react-router-dom';

import DiscoverBar from './discover_bar';
import DiscoverArtistIndexContainer from './discover_artist_index_container';

const genreNamesAndCSSColorSelector = {
  'all': 'one',
  'grunge': 'two',
  'hip hop': 'three',
  'house': 'four',
  'indie': 'five',
  'metal': 'six',
  'pop': 'seven',
  'rap': 'eight',
  'R&B': 'nine',
  'rock': 'ten'
};

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
    const genreSelected = Object.keys(genreNamesAndCSSColorSelector)[idx];
    const colorSelector = genreNamesAndCSSColorSelector[genreSelected];

    // fetches bands by genres
    this.setState({selectedGenreIndex: idx});
    this.props.fetchBandsByGenre(genreSelected);

    // changes color of parent discover-bar-div depending on genre selected 
    let discoverBar = document.querySelector('.discover-bar-div');
    discoverBar.className = (
      `discover-bar-div ${colorSelector}`
    );
  }

  render () {
    return (
      <div className='discover-show-div'>
        <DiscoverBar
          genreNames={Object.keys(genreNamesAndCSSColorSelector)}
          selectedGenreIndex={this.state.selectedGenreIndex}
          onGenreChosen={this.selectGenre} />
        <DiscoverArtistIndexContainer />
      </div>
        );

  }
}

export default DiscoverShow;
