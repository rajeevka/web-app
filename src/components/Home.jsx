import React from 'react'
import Navbarlogo from "./Navbarlogo.png";
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="Navbar">
        <div className="logoleft">
          <img src={Navbarlogo} alt="" />
        </div>
        <div className="Navbarmidle">
          <Link to="/HomePage">
            <p>Home</p>
          </Link>
          <Link to="/About">
            <p>About</p>
          </Link>
          <Link to="/Projects">
            <p>Projects</p>
          </Link>
          <Link to="/Services">
            <p>Services</p>
          </Link>
          <Link to="/Blog">
            <p>Blog</p>
          </Link>
          <Link to="/Contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="Navbarright">
          <button>Enquiry Now</button> &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </>
  );
}

export default Home