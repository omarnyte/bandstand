import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverBar extends React.Component {
  render() {

    let selectedIndex = this.props.selectedGenreIndex;
    const genreNames = this.props.genreNames;
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
