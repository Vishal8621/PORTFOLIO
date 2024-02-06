import React from "react";
import img3 from "../Imdbmovie.png"
import img4 from "../Screenshot.png"
import img5 from "../Screenshot1.png"
import img6 from "../Screenshot2.png"
import img7 from "../Screenshot3.png"
import img8 from "../RoveIndia.jpg"

const Project = () => {
  return (
    <>
      <div className="container-fluid main5">
        <div className="container e1 py-5">
          {/* <WorkIcon style={{ fontSize: "40px", color: "green" }} /> */}
          <h1 style={{ color: "green", fontSize: "40px" }}>
            Projects
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m1">
              <div className="n1">
                <div className="n11">
                  hello
                </div>

              </div>
            </div>
            <div className="col-lg-4 m1">
              <div className="n2">
                <div className="n11">
                  hello
                </div>

              </div>
            </div>
            <div className="col-lg-4 m1">
              <div className="n3">
                <div className="n11">
                  hello
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container py-4 pb-5">
          <div className="row">
            <div className="col-lg-4 m1">
              <div className="n4">

                <a href="http://127.0.0.1:5500/solar%20system.html">
                  <div className="n11"><p className="text">solar system</p></div>
                  </a>

              </div>
            </div>

            <div className="col-lg-4 m1">
              <div className="n5">
                <div className="n11">
                  hello
                </div>
              </div>
            </div>
            <div className="col-lg-4 m1">
              <div className="n6">
                <div className="n11">
                  hello
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
};

export default Project;