import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverBarIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='discover-bar-index-item-div'>
        <span
          className='discover-genre-name'
          onClick={() => console.log('oh hi')}>
          {this.props.genre}

        </span>
      </div>
    );
  }
}

export default DiscoverBarIndexItem;
