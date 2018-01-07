import React from 'react';
import { Link } from 'react-router-dom';

import DiscoverBarIndexItemContainer from './discover_bar_index_item_container';

class DiscoverBarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const genres = [
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

    return (
      <div className='discover-bar-index-outer-div'>
        <div className='discover-bar-index-div'>
          {genres.map((genre, idx) =>
            <DiscoverBarIndexItemContainer key={idx} genre={genre}/>
          )}
        </div>
      </div>
    );
  }
}

export default DiscoverBarIndex;
