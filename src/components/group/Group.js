import React, {PropTypes} from 'react';
import Tour from '../tour/Tour';

class Group extends React.Component {
  render() {
    const { tours, groupName, onBookingNowClick } = this.props;
    return (
      <div>
        <h2>{groupName}</h2>
        <div className="row">
          {tours.map((tour, index) => 
            <Tour 
              key={index} 
              tour={tour}
              onBookingNowClick={onBookingNowClick} />)}
        </div>
      </div>
    );
  }
}
Group.propTypes = {
  tours: PropTypes.array.isRequired,
  groupName: PropTypes.string.isRequired
};
export default Group;