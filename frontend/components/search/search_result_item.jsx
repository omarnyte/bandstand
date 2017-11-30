import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultItem extends React.Component {

  constructor(props) {
    super(props);
  }

    renderBand(result) {
      if (result.type === 'band') {
        return(
          <div className='result-headings'>
            <span className='result-type'>ARTIST</span>
            <Link to={`/bands/${result.id}`}>
              <strong className='result-title'> {result.band_name}</strong>
            </Link>
            <span className='result-subtitle'>{result.location}</span>
          </div>
        );
      }
    }

    renderAlbum(result) {
      if (result.type === 'album') {
        return(
          <div className='result-headings'>
            <span className='result-type'>ALBUM</span>
            <Link to={`/albums/${result.id}`}>
              <strong className='result-title'> {result.name}</strong>
            </Link>
            <span className='result-subtitle'>by {result.band_name}</span>
          </div>
        );
      }
    }

    renderSong(result) {
      if (result.type === 'song') {
        return(
          <div className='result-headings'>
            <span className='result-type'>TRACK</span>
            <Link to={`/albums/${result.album_id}`}>
              <strong className='result-title'> {result.title}</strong>
            </Link>
            <span className='result-subtitle'>from {result.album_name}</span>
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
            {this.renderAlbum(result)}
            {this.renderSong(result)}
          </div>
        );
    }
  }




export default SearchResultItem;
