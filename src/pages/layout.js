import { Outlet, Link } from "react-router-dom";
import React from "react";
import './layout.css'
import Skills from "./Skills";
import About from "./About";
const Layout = () => {
  return (
    <>
    <div id="main1">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
              <span class="navbar-toggler-icon " style={{color:"white",backgroundColor:"whitesmoke"}}></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav1">
                <li class="nav-item" >
                  <Link to="/" style={{ color: "white" }}  className="y1">Home</Link>
                </li>
                <li class="nav-item"  style={{ marginLeft: "30px" }}>
                  <Link to="/About"  style={{ color: "white" }}>About</Link>
                </li>
                <li class="nav-item"  style={{ marginLeft: "30px" }}>
                  <Link to="/Skills"  style={{ color: "white" }}>Skills</Link>
                </li>
                <li style={{ marginLeft: "30px" }}>
              <Link to="/Experince" style={{ color: "white" }}>Experince</Link>
            </li>
            <li style={{ marginLeft: "30px" }}>
              <Link to="/Education" style={{ color: "white" }}>Education</Link>
            </li>
            <li style={{ marginLeft: "30px" }}>
              <Link to="/Project" style={{ color: "white" }}>Project</Link>
            </li>
            <li style={{ marginLeft: "30px" }}>
              <Link to="/Contact" style={{ color: "white" }}>Contact</Link>
            </li>
           
              </ul>
            </div> 
          </div>
        </nav>
        <h1 className="k1" style={{ textAlign: "center", fontSize: "50px", color: "white", marginTop: "100px" }}>
          Vishal Nagal
        </h1>
      </div>  
      {/* <About/>    */}

    
      <Outlet />
    </>
  )
};

export default Layout;