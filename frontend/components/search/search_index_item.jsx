import React from 'react';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { result } = this.props;

    return(
      <div>
        {result.type}
      </div>
    );
  }

}
