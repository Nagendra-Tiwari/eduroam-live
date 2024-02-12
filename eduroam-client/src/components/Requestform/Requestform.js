import React from "react";
import { Link,useLocation  } from "react-router-dom";
import './Requestform.css'
import Nav from "../Nav/Nav";

const Requestform=()=>{
  const location =useLocation();
    return(

        <>
        <body class="page-background">
        <Nav/>

    <div className="title"> </div>
    <div className="first">
    <img src={require('../images/isometic.png')} alt="image" className="isometic"/>
    
    <div className="ques"><h2>Ready to get eduroam installed ?</h2><hr className="hr1"></hr> 
    <p className="detail"><h3>Radius Server and “eduroam” SSID is all you need for the setup. You only need a user database server, where your user’s ID and password are stored along with a RADIUS server for authentication and logging
    We have a eduroam stack to get you started right away.</h3></p></div>
    </div>
    <div className="title1" >
   <h2 className="form">Online request form to join eduroam</h2>
   <p><h2 className="form1">For enabling eduroam services, you are also requested to kindly fill out the form (duly signed and stamped) and send it to ERNET India. <br></br>(support@ernet.in) </h2></p>

   <p className="download"><a href={require('../Document/RequestForm.pdf')} target="_blank" rel="noopener noreferrer" >
   <strong>Download Form</strong></a></p>
        </div>



        <footer className="footer">
        <div className="footer-content">
          <p>&copy; Eduroam - ERNET India | 2022 All Rights Reserved
</p>
        </div>
      </footer>
    </body>
  
        </>
    )
}
export default Requestform;

