import React, { useState, useEffect } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [to_name, setToName] = useState(
    process.env.REACT_APP_EMAILJS_RECEIVER_NAME
  );
  const [from_name, setFromName] = useState();
  const [reply_to, setReplyTo] = useState();
  const [message, setMessage] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);

  useEffect(()=> {
    console.log('formSubmitSuccessful',formSubmitSuccessful);
    setFromName('');
    setReplyTo('');
    setPhoneNumber('');
    setMessage('');
  }, [formSubmitSuccessful])


  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit', from_name, reply_to, message, phoneNumber)
    const receiverEmail = process.env.REACT_APP_EMAILJS_RECEIVER;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const user = process.env.REACT_APP_EMAILJS_USERID;
    console.log(receiverEmail, templateId, user);

    setMessage(prevMessage => prevMessage + ' Phone Number: '+phoneNumber)

    sendFeedback({
      receiverEmail,
      templateId,
      message,
      to_name,
      from_name, 
      reply_to,
      user,
    });

    setFormSubmitted(true);
  }

 
  const sendFeedback = ({
    templateId,
    receiverEmail,
    message,
    to_name,
    from_name,
    reply_to,
    user,
  }) => {
    window.emailjs
      .send(
        "default_service",
        templateId,
        {
          receiverEmail,
          message,
          to_name,
          from_name,
          reply_to,
        },
        user
      )
      .then((res) => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true);
        }
      })
      // Handle errors here however you like
      .catch((err) => console.error("Failed to send Message. Error: ", err));
  };


  return (
    <>
      <p>{process.env.REACT_APP_EMAILJS_USERID}</p>
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
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      {" "}
                      Your name <span>*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={from_name}
                        onChange={(e) => setFromName(e.target.value)}
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
                        className="form-control"
                        value={reply_to}
                        onChange={(e) => setReplyTo(e.target.value)}
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
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <textarea
                        type="text"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-primary btn-block rounded-0 py-2"
                    />
                  </div>
                </form>
                {formSubmitSuccessful && <div><p>Your Enquiry Sent Successfully</p></div>}
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
