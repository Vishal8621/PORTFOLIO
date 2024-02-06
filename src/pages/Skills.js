import React from "react";
import './layout.css'
import AddchartIcon from '@mui/icons-material/Addchart';

const Skills = () => {
    return (
        <>
            <div className="container-fluid s2">
                <div class="container">
                    <div class="container">
                        <div class="container">
                            <div className="s1">

                                <AddchartIcon style={{ fontSize: "60px", color: "green" }} />
                                <h1 style={{ fontSize: "50px", color: "green" }}>Skills</h1>
                            </div>
                            <div class="row " style={{ marginTop: "40px" }}>
                                <div class="col-lg-4 b1">
                                    <div class="progress p1">
                                        <div class="progress-bar p11" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 b1">
                                    <div class="progress p2">
                                        <div class="progress-bar p22" role="progressbar" aria-label="Example with lssabel" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 b1 ">
                                    <div class="progress p3">
                                        <div class="progress-bar p33" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">BOOTSTRAP</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pb-5" style={{ marginTop: "30px" }}>
                                <div class="col-lg-4 b1">
                                    <div class="progress p4">
                                        <div class="progress-bar p44" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">JAVA SCRIPT</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 b1">
                                    <div class="progress p5">
                                        <div class="progress-bar p55" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">REACT</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 b1 ">
                                    <div class="progress p6 ">
                                        <div class="progress-bar p66" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">NODE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container fluid">

            </div>

        </>
    )
};

export default Skills;