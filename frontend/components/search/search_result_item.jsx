import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultItem extends React.Component {

  constructor(props) {
    super(props);
  }

    renderBand(result) {
      if (result.type === 'band') {
        return(
          <div className='search-result-item-component'>
            <Link to={`/bands/${result.id}`}>
              <img className='search-result-image' src={result.image_location}/>
            </Link>
              <div className='result-headings'>
                <span className='result-type'>ARTIST</span>
                <Link to={`/bands/${result.id}`}>
                  <strong className='result-title'> {result.band_name}</strong>
                </Link>
                <span className='result-subtitle'>{result.location}</span>
              </div>
          </div>
        );
      }
    }

    renderAlbum(result) {
      if (result.type === 'album') {
        return(
          <div className='search-result-item-component'>
            <Link to={`/albums/${result.id}`}>
              <img className='search-result-image' src={result.image_location}/>
            </Link>
              <div className='result-headings'>
                <span className='result-type'>ALBUM</span>
                <Link to={`/albums/${result.id}`}>
                  <strong className='result-title'> {result.name}</strong>
                </Link>
                <span className='result-subtitle'>by {result.band_name}</span>
              </div>
          </div>
        );
      }
    }

    renderSong(result) {
      if (result.type === 'song') {
        return(
          <div className='search-result-item-component'>
            <Link to={`/albums/${result.album_id}`}>
              <img className='search-result-image' src={result.image_location}/>
            </Link>
              <div className='result-headings'>
                <span className='result-type'>SONG</span>
                <Link to={`/albums/${result.album_id}`}>
                  <strong className='result-title'> {result.title}</strong>
                </Link>
                <span className='result-subtitle'>from {result.album_name}</span>
              </div>
          </div>
        );
      }
    }

    render() {
      const { result } = this.props;
        return(
          <div>
            {this.renderBand(result)}
            {this.renderAlbum(result)}
            {this.renderSong(result)}
          </div>
        );
    }
  }

export default SearchResultItem;
