import React from "react";
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
    return (
        <>
            <div className="container-fluid main6">
                <div className="container">
                    <div className="c1">
                        < ContactPageRoundedIcon style={{ fontSize: "40px", color: " whitesmoke" }} />
                        <h1>Contact</h1>
                    </div>
                    <div className="container c2 mt-3">
                        <div className="row">
                            <div className="col-lg-4 c3 mt-5">
                                <h5>
                                    Get In Touch
                                </h5>
                                <div>
                                    <form>
                                        <input type="text" className="c4 mt-4" placeholder="Your Name">
                                        </input>
                                        <input type="text" className="c4 mt-5" placeholder="Your Email">
                                        </input>
                                        <input type="text" className="c4 mt-5" placeholder="Message">
                                        </input>
                                        <button className="c5 mt-5 mb-5"><b>SEND MESSAGE</b></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4  mt-5" style={{paddingLeft:"70px"}}>
                                <h5 className="mb-4" >My Address</h5>
                                <h6>
                                    <LocationOnIcon className="" />Haryana, India
                                </h6>
                                <h6 className="mt-4">
                                    <PhoneAndroidIcon className="" />+91 9671553038
                                </h6>
                                <h6 className="mt-4">
                                    <EmailIcon className="" />vishalnagal05@gmail.com
                                </h6>
                            </div>
                            <div className="col-lg-4 c3 mt-5" >
                            <h5 className="mb-4" >Social Links</h5>
                            <h6 >
                            <a href="https://www.instagram.com/vishal1701___" target="_blank" >
                            <InstagramIcon className="r1" />
                            </a>
                            <a href="https://wa.me/qr/Q4WHL3TVT52XE1" target="_blank" >
                            <WhatsAppIcon className="r1"/>
                            </a>
                            <a href="https://wa.me/qr/Q4WHL3TVT52XE1" target="_blank" > 
                            <LinkedInIcon className="r1"/>        
                             </a>
                            </h6>
                            </div>
                        </div>
                    </div>
                   

                </div>
                
            </div>
            
        </>
    )
};
export default Contact; 