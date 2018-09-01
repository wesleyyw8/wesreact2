import React from 'react';
import Tour from '../tour/Tour';
class Group extends React.Component {
  render() {
    const { tours, groupName } = this.props;
    return (
      <div>
        <h2>{groupName}</h2>
        <div className="row">
          { tours.map((tour, index) => <Tour key={index} tour={tour} />)}
        </div>
      </div>
    );
  }
}

export default Group;