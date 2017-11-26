import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({ album }) => (
  <li className="album-index-item">
    <Link to={`/albums/${album.id}`}>
      <span>{album.name}</span>
    </Link>
  </li>
);

export default AlbumIndexItem;
