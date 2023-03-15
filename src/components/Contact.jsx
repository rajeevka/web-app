import React from 'react'
import Home from "./Home";
import './About.css'
const Contact = () => {
  return (
    <div>
      <Home />
      <div className="contact">
        <div className="cl">
          <h1>I Connect With Us</h1>
          <label htmlFor="" style={{ color: "blue" }}>
            Enquiry
            <p style={{ color: "black" }}>email@gmail.com</p>
            <p style={{ color: "black" }}>88888888888</p>
          </label>
          <hr />
          <label htmlFor="" style={{ color: "blue" }}>
            Procrement Team
            <p style={{ color: "black" }}>email@gmail.com</p>
            <p style={{ color: "black" }}>88888888888</p>
          </label>
          <hr />
          <label htmlFor="" style={{ color: "blue" }}>
            General Enquiry
            <p style={{ color: "black" }}>email@gmail.com</p>
            <p style={{ color: "black" }}>88888888888</p>
          </label>
        </div>
        <div className="cr">
          <label htmlFor="">
            Name
            <input type="text" />
          </label>
          <label htmlFor="">
            Country
            <input type="text" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Contact