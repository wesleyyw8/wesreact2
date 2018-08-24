import React from 'react';
import Tour from '../tour/Tour';
class Group extends React.Component {
  render() {
    return (
      <div className="group">
        <h2>group</h2>
        <Tour/>
      </div>
    );
  }
}

export default Group;