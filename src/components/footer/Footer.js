import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <p className="text-center">
        <a href="#wrapper" className="gototop">
          <i className="fa fa-angle-double-up fa-2x"></i>
        </a>
      </p>
      <div className="container">
        <div className="row">
          <div className="col-4 offset-md-4">
            <ul className="d-flex justify-content-between">
              <li>
                <a href="https://google.com/">
                  <i className="fa fa-google"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/in/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-2">
          © 2021 Marappa Exclusive
          <br />
        </p>
      </div>
    </section>
  );
};

export default Footer;
