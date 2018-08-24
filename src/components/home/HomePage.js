import React from 'react';
import Group from '../group/Group';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <Group/>
      </div>
    );
  }
}

export default HomePage;