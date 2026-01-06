import React from "react";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thankyou-page">
      <div className="thankyou-container">
        <span className="emoji">✨</span>
        <h1>Thank You!</h1>
        <p>
          We have received your message and will respond to you shortly.
          <br />
          Wishing you a wonderful day filled with elegance and inspiration!
        </p>
        <a href="/" className="btn-home">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
