import React from "react";
import WorkIcon from '@mui/icons-material/Work';
import FlightIcon from '@mui/icons-material/Flight';
const Experince = () => {
  return (
    <>

      <div className="container-fluid main5">
        <div className="container e1 py-5">

          <WorkIcon style={{ fontSize: "40px", color: "green" }} />

          <h1 style={{ color: "green", fontSize: "40px" }}>
            Work Experince
          </h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 e2">
            <div style={{ width: "90%" }}>
              <h2 style={{ color: "green" }}> <b>React Js Developer</b></h2>
              <h2 style={{ color: "green" }}><b>Omninos Solution</b></h2>
              <p className="e4" style={{ color: "gray" }}>
                During my React.js internship, I'll work on some projects and
                learn how to build interactive user interfaces using React.
                I'll learn how to create reusable components, manage state
                and props,use React hooks and libraries, and debug my code.
                I'll also collaborate with other developers,participate in
                code reviews, and use modern development tools and practices.
                I'll also have gained practical experience and a solid
                understanding of React.js development.
              </p>
            </div>

            <div style={{ width: "10%" }}>
              <div className="timeline-divider1">
                <div className="timeline-travler1">
                  <FlightIcon className="airplane" />
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-6 e3 ">
            <div style={{ width: "10%" }}>
              <div className="timeline-divider1">
                <div className="timeline-travler1">
                  <FlightIcon className="airplane" />
                </div>
              </div>
            </div>

          
          <div style={{ width: "90%" }}>
            <h2 style={{ color: "green" }}><b>HTML,CSS,BOOTSTRAP,</b></h2>
            <h2 style={{ color: "green" }}><b>Omninos Solution</b></h2>
            <p className="e4" style={{ color: "gray" }}>
              During my web developers internship, I'll work on some projects and
              learn how to build interactive user interfaces using Html,css,bootstrap.
              I'll learn how to create reusable components, manage state
              and props,use React hooks and libraries, and debug my code.
              I'll also collaborate with other developers,participate in
              code reviews, and use modern development tools and practices.
              I'll also have gained practical experience and a solid
              understanding of Html,css,bootstrap  development.
            </p>
          </div>
        </div>
      </div>
    </div >
    </>
  )
};

export default Experince;