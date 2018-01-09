import React from 'react';
import { Link } from 'react-router-dom';

// import DiscoverBarIndexItemContainer from './discover_bar_index_item_container';
import DiscoverBarIndexItem from './discover_bar_index_item';

class DiscoverBarIndex extends React.Component {
  constructor(props) {
    super(props);
  }



  // componentDidMount() {
  //   this.props.fetchPermittedGenres();
  //   console.log('cdm', this.props.genres);
  // }


  render() {

    

    if (!this.props.genres) return null;
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
            <DiscoverBarIndexItem key={idx} genre={genre}/>
            )}
        </div>
      </div>
    );
  }
}

export default DiscoverBarIndex;
