import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import './About.css'
import Footer from "../Footer/Footer";

const About=()=>{
    return(
        <>
        <div className="page-container">
            <Nav/>
            <div className="main-content">
            <h2 className="about">About Us</h2>
            <p className="list"><strong>eduroam ®</strong> is a global service that enables students, researchers and staff from participating institutions to obtain Internet connectivity across campus and when visiting other participating institutions by simply opening their laptop or activating their smartphone or other portable device through wifi.<br></br> With eduroam, you get Internet access not only via your institution’s wireless network, but also when visiting other participating universities, colleges, research centres and libraries. This facility would enable users visiting other eduroam enabled institutions globally to get authenticated and connected to the visiting institutions network using their home institution ID and password and use it for free internet access.
            <br></br>
                In order to join this initiative one and foremost requirement is that you should have the infrastructure in place, which comprises of a user database server, where your users’ ID and password are stored along with a RADIUS server for authentication and logging. You will also need to configure your existing wireless LAN with an additional SSID “eduroam”.
                <br></br>The cost involved is almost negligible if you have a wi-fi infrastructure in place or intend to deploy one in the near future with eduroam services riding on the same infrastructure.</p>
        
        <div className ='btn'>
        <a href={require('../Document/eduroam-leaflet.pdf')} target="_blank" rel="noopener noreferrer">Download Flyer</a></div>
     
        </div>
        
        <div className="video">
        <video width="380" height="180" controls=" ">
        <source src={require('../images/eduroam.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>

        <div>
            <img src={require('../images/eduroam_home.png')} alt="eduroam_image" className="image"/>
        </div>
        
        <footer className="footer-1">
        
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        
      </footer>
      </div>
        </>

        

    );
};

export default About;