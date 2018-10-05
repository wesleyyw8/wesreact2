import React, {PropTypes} from 'react';
import countDown from './countDown';

class Tour extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // timer: Object.assign({}, this.props.tour.timer)
      timer: this.props.tour.timer
    };
  }
  componentDidMount() {
    const { groupIndex, tourIndex } = this.props;
    const x = setInterval(() => {
      let timer = countDown(this.state.timer);
      if (timer.getTime() === new Date().getTime()) {
        this.props.onCountDownFinished(groupIndex, tourIndex);
        clearInterval(x);
      }
      this.setState({timer});
    }, 1000);

  }
  formatTime(time) {
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return {
      years: time.getFullYear() - new Date().getFullYear(),
      months: time.getMonth() - new Date().getMonth(),
      days: time.getDate(),
      hours: time.getHours(),
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds  < 10 ? `0${seconds}` : seconds
    };
  }
  render() {
    const { tourName, seatsLeft, isAvailable } = this.props.tour;
    const { groupIndex, tourIndex } = this.props;
    const { onBookingNowClick } = this.props;

    const timer = this.formatTime(this.state.timer);
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
            {`${timer.years > 0 ? `${timer.years} year ` : ''}`}
            {`${timer.months > 0 ? `${timer.months} months ` : ''}`}
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