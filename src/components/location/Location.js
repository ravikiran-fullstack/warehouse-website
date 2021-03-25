import React from "react";
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2677918711665!2d77.55637471452796!3d13.018611317368082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7c4fd5681d%3A0x2e10e8d8521f8119!2sMaarappa%20Kalyana%20Mantapa!5e0!3m2!1sen!2sin!4v1616663059733!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
