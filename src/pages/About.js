import React from "react";
import img1 from '../img1.jpg'
import './layout.css'
import Skills from "./Skills";


const About = () => {
    return (
        <>
            <div className="main5">
                <div class="container z1">
                    <div className="t1">
                        <div id=" a1">
                            <img src={img1} alt="img" id="img1" />

                        </div>
                    </div>
                    <div id="a2">
                        <p id="p1" className="animate__zoomInLeft vishal">
                            I believe that I can be a good team player with the ability to
                            work under minimum guidance especially when  carrying out challenging assignment.
                            I consider myself as a very ambitious, motivated, career oriented person, willing
                            to accept challenges, energetic and results oriented, with excellent leadership
                            abilities,and an active and hardworking person who is patient and diligent,
                            with great adaptability to changing working conditions.
                        </p>
                       
                    </div>
                </div>
            </div>
            {/* <Skills/> */}

        </>
    )
};

export default About;