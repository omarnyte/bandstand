import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({ album }) => (
  <li className="album-index-item">
    <Link to={`/albums/${album.id}`}>
      <img className='album-cover-thumb' src={album.image_location} />
      <span className='album-index-item-title'>{album.name}</span>
    </Link>
  </li>
);

export default AlbumIndexItem;
