import React from 'react';
import { withRouter } from 'react-router-dom';

import FollowedBandsIndexContainer from './followed_bands_index_container';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }


  render () {
    const { currentUser } = this.props;

    return (
      <div className='profile-show-component'>
        <div className='fan-bio'>
          <div className='profile-picture'></div>
          <span className='profile-username'>{currentUser.username}</span>
          <button className='edit-profile-button'>EDIT PROFILE</button>
        </div>
        <div className='profile-bottom'>
          <FollowedBandsIndexContainer />
        </div>
      </div>
    );
  }
}


export default withRouter(ProfileShow);
