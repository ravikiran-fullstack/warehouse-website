import React from "react";
import Map from '../map/Map';
import './Location.css';

const Location = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <div
            className="address"
          >
            <h4>Maarappa Kalyana Mantapa</h4>   
            <p>
              SC Road, Opposite-Yeshwanthpur Police Station, Yeshwanthpur,
              Bengaluru, Karnataka 560022
            </p>
            <p><a href="tel:+917338093789">Call us at +917338093789</a></p>
          </div>
        </div>
        <div className="col-md-8 d-flex justify-content-center">
          <Map/>
        </div>
      </div>
    </div>
  );
};

export default Location;
