import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultItem extends React.Component {

  constructor(props) {
    super(props);
    this.renderBand = this.renderBand.bind(this);
  }

    renderBand(result) {
      if (result.type === 'band') {
        return(
          <div className='result-headings'>
            <span className='result-type'>ARTIST</span>
            <span className='result-title'>{result.band_name}</span>
            <span className='resut-subtitle'>{result.location}</span>
          </div>
        );
      }
    }

    render() {
      const { result } = this.props;
        return(
          <div className='search-result-item-component'>
            <img className='search-result-image' src={result.image_location}/>
            {this.renderBand(result)}
          </div>
        );
    }
  }




export default SearchResultItem;
