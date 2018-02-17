import React from 'react';

import FollowedBandsItem from './followed_bands_item';

class FollowedBandsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchFollowedBands(this.props.match.params.userId);
  }

  render() {
    const { bands } = this.props;
    if (Object.keys(bands).length === 0) return null;
    console.log(bands);

    return (
      <ul className="followed-band-index">
        {
          Object.keys(bands).map(bandId => (
            <FollowedBandsItem band={bands[bandId]} />
          ))
        }
      </ul>
    );
  }
}

export default FollowedBandsIndex;
