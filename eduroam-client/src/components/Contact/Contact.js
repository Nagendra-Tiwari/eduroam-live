import React from "react";
import { Link, useLocation  } from "react-router-dom";
import "./Contact.css";
import Nav from "../Nav/Nav";


const Contact = () => {
  const location =useLocation();
  return (
    <>
      <Nav/>
      <div>
        <h1>CONTACT </h1>
        <p className="p">Please contact below for joining eduroam network.</p>
        <hr></hr>

        <p className="p">Dr. Nirmal Marwah <br></br>Additional Director (Technical) </p>

        <p className="contact"> <strong>Phone</strong> <span>: 011-22170572</span></p>
        <p className="contact"><strong>Fax</strong><span>: 011-22170602</span></p>
        <p className="contact"><strong>Email</strong><span>: </span><a href="mailto:nirmal@eis.ernet.in">nirmal@eis.ernet.in</a></p>
        <hr></hr>

        <p className="contact">
           <strong>Address : ERNET India,</strong>
        </p>
        <p className="address">Block-I, A Wing, 5th Floor<br></br>
        DMRC IT Park, Shastri Park<br></br>
        Delhi-110053</p>

      </div>
      <footer className="footer-1">
        <div className="footer-content-1">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
export default Contact;
