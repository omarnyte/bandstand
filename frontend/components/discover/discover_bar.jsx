import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverBar extends React.Component {
  render() {
    let genreNames = [
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

    let selectedIndex = this.props.selectedGenreIndex;
    let genres = genreNames.map((genre, index) => {
      let genreName = genre;
      let klass = 'discover-genre-name';
      if (index === selectedIndex) klass = 'discover-genre-name selected';

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.onGenreChosen.bind(null, index)}>
          {genreName}
        </li>
      );
    });

    return (
      <div className='discover-bar-div'>
        <ul className='discover-bar-genre-list'>
          {genres}
        </ul>
      </div>
    );
  }
}

export default DiscoverBar;
