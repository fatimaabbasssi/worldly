import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold fade-slide-in">Contact Us</h2>
      <div className="row align-items-center">
        <div className={`col-md-6 mb-4 ${visible ? 'fade-slide-in' : ''}`}>
          <form className="p-4 border rounded shadow">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Enter Email</label>
              <input type="email" className="form-control" id="email" placeholder="your@email.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-info fw-bold w-100">Send Message</button>
          </form>
        </div>

        <div className={`col-md-6 text-center ${visible ? 'fade-slide-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Contact Illustration"
            className="img-fluid contact-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;


