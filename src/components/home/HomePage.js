import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Group from '../group/Group';
import { mapStateToProps, mapDispatchToProps } from './connectors';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onBookingNowClick = this.onBookingNowClick.bind(this);
    this.onCountDownFinished = this.onCountDownFinished.bind(this);
  }
  onBookingNowClick(groupIndex, tourIndex, seatsLeft) {
    this.props.bookTourAction(groupIndex, tourIndex);
    if (seatsLeft === 1) {
      this.props.disableTourAction(groupIndex, tourIndex);
    }
  }
  onCountDownFinished(groupIndex, tourIndex) {
    this.props.disableTourAction(groupIndex, tourIndex);
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
            groupIndex={index}
            onCountDownFinished={this.onCountDownFinished}
            onBookingNowClick={this.onBookingNowClick} />)}
      </div>
    );
  }
}

HomePage.propTypes = {
  groups: PropTypes.array.isRequired,
  bookTourAction: PropTypes.func.isRequired,
  disableTourAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);