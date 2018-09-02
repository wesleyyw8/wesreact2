import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Group from '../group/Group';
import { mapStateToProps } from './connectors';

class HomePage extends React.Component {
  render() {
    const { groups } = this.props;
    return (
      <div className="container">
        {groups.map((group, index) => <Group key={index} groupName={group.groupName} tours={group.tours} />)}
      </div>
    );
  }
}

HomePage.propTypes = {
  groups: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(HomePage);