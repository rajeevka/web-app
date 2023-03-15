import React from 'react'
import Home from "./components/Home";
import worker from './worker.PNG'
import './App.css'
const HomePage = () => {
  return (
    <div>
      <Home />
      <div className="homepage">
        <div className="hl">
          <h1>Leading MEP Lorem ipsum dolor sit amet.</h1>
          <h1>MEP Lorem lore,jsjswjhwhni.</h1>
          <h1>Dubai</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            at?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <br />
          <button>Company Profile</button> &nbsp;&nbsp;&nbsp;&nbsp;
          <span>Watch Video</span>
        </div>
        <div className="hr">
          <img src={worker} alt="no" />
        </div>
      </div>
    </div>
  );
}

export default HomePage