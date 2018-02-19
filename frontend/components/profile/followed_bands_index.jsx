import React from 'react';

import FollowedBandsItem from './followed_bands_item';

class FollowedBandsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchFollowedBands(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    const currentUserId = this.props.match.params.userId;
    const nextUserId = nextProps.match.params.userId;
    if (currentUserId !== nextUserId) {
      this.props.fetchFollowedBands(nextUserId);
    }
  }



  render() {
    const { bands } = this.props;
    if (Object.keys(bands).length === 0) return null;

    return (
      <div>
        <span className="follow-count">Following {Object.keys(bands).length}</span>
        <ul className="followed-bands-index">
          {
            Object.keys(bands).map(bandId => (
              <FollowedBandsItem band={bands[bandId]} key={bandId} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default FollowedBandsIndex;
