import React, {PropTypes} from 'react';
import formatTime from './formatTime';

class Tour extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timer: this.props.tour.timer,
      distance: 0
    };
  }
  componentDidMount() {
    const { groupIndex, tourIndex } = this.props;
    const timer = this.state.timer.getTime();
    const x = setInterval(() => {
      let now = new Date().getTime();
      let distance = timer - now;
      let result = new Date(distance);
      if (distance < 0) {
        this.props.onCountDownFinished(groupIndex, tourIndex);
        clearInterval(x);
      } else {
        this.setState({distance: distance});
      }
    }, 1000);

  }
  render() {
    const { tourName, seatsLeft, isAvailable } = this.props.tour;
    const { groupIndex, tourIndex } = this.props;
    const { onBookingNowClick } = this.props;

    const timer = formatTime(this.state.distance);
    const onBookingButton = 
      (<button 
        onClick={() => onBookingNowClick(groupIndex, tourIndex, seatsLeft)}
        disabled={!isAvailable}
        className={'btn btn-primary'} >
          Book now!
      </button>);

    return (
      <div className="tour col-sm-3">
        <div className="card">
          <div className="card-header text-center">
            {`${timer.days > 0 ? `${timer.days} days and ` : ''}`} 
            {timer.hours}:{timer.minutes}:{timer.seconds}
          </div>
          <img className="card-img-top" src="https://cdn.tourradar.com/s3/tour/645x430/24087_1ac9705f.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{tourName}</h4>
            <p className="card-text">Seats left: {seatsLeft}</p>
            {onBookingButton}
          </div>
        </div>
      </div>
    );
  }
}

Tour.propTypes = {
  tour: PropTypes.object.isRequired,
  onBookingNowClick: PropTypes.func.isRequired,
  groupIndex: PropTypes.number.isRequired,
  tourIndex: PropTypes.number.isRequired,
  onCountDownFinished: PropTypes.func.isRequired
};

export default Tour;