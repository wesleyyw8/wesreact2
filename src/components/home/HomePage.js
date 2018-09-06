import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Group from '../group/Group';
import { mapStateToProps, mapDispatchToProps } from './connectors';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onBookingNowClick = this.onBookingNowClick.bind(this);

  }
  onBookingNowClick() {
    this.props.bookTourAction();
  }
  render() {
    const { groups } = this.props;
    return (
      <div className="container">
        {groups.map((group, index) => 
          <Group 
            key={index} 
            groupName={group.groupName} 
            tours={group.tours} 
            onBookingNowClick={this.onBookingNowClick} />)}
      </div>
    );
  }
}

HomePage.propTypes = {
  groups: PropTypes.array.isRequired,
  bookTourAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);