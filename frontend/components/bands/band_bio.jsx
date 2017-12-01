import React from 'react';

class BandBio extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFollowUnfollow = this.toggleFollowUnfollow.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.band.id !== nextProps.band.id) {
      this.props.fetchBand(nextProps.band.id); 
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (!currentUser)  {
      alert('You must be logged in to follow a band!')
    } else if (this.props.band.followed_by_current_user) {
      this.props.unfollowBand(this.props.band.id)
    } else {
      this.props.followBand(this.props.band.id)
    }
  }

  toggleFollowUnfollow(band) {
    if (band.followed_by_current_user) {
      return (
        <div>
          <button className='follow-unfollow' onClick={this.handleClick}>
            Unfollow
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className='follow-unfollow' onClick={this.handleClick}>
            Follow
          </button>
        </div>
      );
    }
  }

  render() {
    const { band } = this.props;

    if  (!band) return null;

    return (
      <div className='band-bio-component'>
        <img className='band-bio-image' src={band.image_location}/>
        <div className='band-name-and-location'>
          <h2 className='mini-bio-band-name'>{band.band_name}</h2>
          <h3 className='band-location' id='band-location'>{band.location}</h3>

          {this.toggleFollowUnfollow(band)}

        </div>
        <p className='mini-bio'>{band.mini_bio}</p>
      </div>

    );
  }
}

export default BandBio;
