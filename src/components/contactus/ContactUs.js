import React from "react";
import './Contact.css';

const ContactUs = () => {
  return (
    <>
      <section className="container mt-3">
        <div className="row">
          <div className="col-sm-12 mb-4 col-md-5">
            <div className="card border-primary rounded-0">
              <div className="card-header p-0">
                <div className="backgroundColor text-white text-center py-2">
                  <h5>
                    <i className="fa fa-envelope"></i> Contact Us:
                  </h5>
                  <p className="m-0">We will respond within few hours</p>
                </div>
              </div>
              <div className="card-body py-2 pl-3 pr-3">
                <div className="form-group">
                  <label>
                    {" "}
                    Your name <span>*</span>
                  </label>
                  <div className="input-group">
                    <input
                      value=""
                      type="text"
                      name="data[name]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Your email<span>*</span>
                  </label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      value=""
                      name="data[email]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Your Phone Number</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Subject<span>*</span>
                  </label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      name="data[subject]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <textarea
                      type="text"
                      className="form-control"
                      name="message"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    name="submit"
                    value="submit"
                    className="btn btn-primary btn-block rounded-0 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-7">
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2677918711665!2d77.55637471452796!3d13.018611317368082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7c4fd5681d%3A0x2e10e8d8521f8119!2sMaarappa%20Kalyana%20Mantapa!5e0!3m2!1sen!2sin!4v1616663059733!5m2!1sen!2sin"
                width="100%"
                height="500"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
