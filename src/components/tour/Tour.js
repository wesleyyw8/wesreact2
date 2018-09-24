import React, {PropTypes} from 'react';
import countDown from './countDown';

class Tour extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timer: Object.assign({}, this.props.tour.timer)
    };
  }
  componentDidMount() {
    const { groupIndex, tourIndex } = this.props;
    console.log(this.state.timer);
    // const x = setInterval(() => {
    //   let timer = countDown(new Date(this.state.timer));
    //   if (timer.getTime() === new Date().getTime()) {
    //     this.props.onCountDownFinished(groupIndex, tourIndex);
    //     clearInterval(x);
    //   }
    //   this.setState({timer: Object.assign({}, timer)});
    // }, 1000);

  }
  formatTime(time) {
      const timerFormated = {
        days: time.days,
        hours: time.hours,
        minutes: time.minutes < 10 ? `0${time.minutes}` : time.minutes,
        seconds: time.seconds  < 10 ? `0${time.seconds}` : time.seconds
    };
    return new Date();
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
            {`${timer.days > 0 ? `${timer.days} days` : ''}`} {timer.hours}:{timer.minutes}:{timer.seconds}
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