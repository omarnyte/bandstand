import React from 'react';
import { Link } from 'react-router-dom';

const FollowedBandsItem = ({band}) => {
  const {
    band_name, id, followed_by_current_user, location, image_location
  } = band;

  return (
    <li className="followed-band-li">
      <Link to={`/bands/${id}`}>
        <img src={image_location} className="followed-band-image" />
      </Link>
      <div className="followed-band-text">
        <Link to={`/bands/${id}`}>
          <span className="followed-band-name">{band_name}</span>
        </Link>
        <span className="followed-band-location">{location}</span>
      </div>

    </li>
  );
};

export default FollowedBandsItem;
