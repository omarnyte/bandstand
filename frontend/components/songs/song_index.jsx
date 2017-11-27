import React from 'react';

class SongIndexContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentSongs } = this.props;

    if (currentSongs.length < 1) return <h1>Albums doesn't have any songs!</h1>;

    return (
      <div> {currentSongs[0].title} </div>
    );
  }
}

export default SongIndexContainer;
