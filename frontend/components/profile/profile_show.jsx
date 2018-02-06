import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }


  render () {

    return (
      <div>
        in the profile show
      </div>
    );
  }
}


export default withRouter(ProfileShow);
