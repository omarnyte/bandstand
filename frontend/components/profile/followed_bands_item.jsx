import React from 'react';

const FollowedBandsItem = ({band}) => {
  const {band_name, id, followed_by_current_user} = band;

  return (
    <li>
      <span>{band_name}</span>
    </li>
  );
};

export default FollowedBandsItem;
