import React from 'react';
import { Link } from 'react-router-dom';

import DiscoverBarIndexContainer from './discover_bar_index_container';
import DiscoverArtistIndexContainer from './discover_artist_index_container';

const DiscoverShow = () => {
  return (
    <div>
      <DiscoverBarIndexContainer />
      <DiscoverArtistIndexContainer />
    </div>
  );
};

export default DiscoverShow;
