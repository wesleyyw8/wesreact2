import React, {PropTypes} from 'react';

class Tour extends React.Component {

  formatTime(time) {
      const timerFormated = {
        days: time.days,
        hours: time.hours,
        minutes: time.minutes < 10 ? `0${time.minutes}` : time.minutes,
        seconds: time.seconds  < 10 ? `0${time.seconds}` : time.seconds
    };
    return timerFormated;
  }
  render() {
    const { tourName, seatsLeft, timer, isAvailable } = this.props.tour;
    const timerFormated = this.formatTime(timer);
    return (
      <div className="tour col-sm-3">
        <div className="card">
          <div className="card-header text-center">
            {`${timerFormated.days > 0 ? `${timerFormated.days} days` : ''}`} {timerFormated.hours}:{timerFormated.minutes}:{timerFormated.seconds}
          </div>
          <img className="card-img-top" src="https://cdn.tourradar.com/s3/tour/645x430/24087_1ac9705f.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{tourName}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Book!</a>
          </div>
        </div>
      </div>
    );
  }
}

Tour.propTypes = {
  tour: PropTypes.object.isRequired
};

export default Tour;