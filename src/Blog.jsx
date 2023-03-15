import React from "react";
import Home from "./components/Home";
import blogimage from './blogimage.PNG'
import './App.css'
const Blog = () => {
  return (
    <div className="blog">
      <Home />
      <h1>Blog.</h1>
      <img id="img" src={blogimage} alt="" />
    </div>
  );
};

export default Blog;
