import React from 'react';

class Tour extends React.Component {
  render() {
    const { tourName, seatsLeft, timer, isAvailable } = this.props.tour;

    return (
      <div className="tour col-sm-3">
        <div className="card">
          <div className="card-header text-center">
            Featured
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

export default Tour;