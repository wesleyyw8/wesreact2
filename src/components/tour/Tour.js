import React from 'react';

class Tour extends React.Component {
  render() {
    return (
      <div className="tour">
        <div className="card">
          <img className="card-img-top" src="https://cdn.tourradar.com/s3/tour/645x430/24087_1ac9705f.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Tour;