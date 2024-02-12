import React from "react";
import { Link,useLocation } from "react-router-dom";
import './Techsupport.css'
import Nav from "../Nav/Nav";


const Techsupport = () => {
  const location =useLocation();
    return(
        <>
        <Nav/>

      <div>
            <h1 className="tech">Tech Support</h1>
            
            <p className="p"> How To Configure Device : - </p>

            <p className='links'>1.
                <a href={require('../Document/IOS-Setup.pdf')} target="_blank" rel="noopener noreferrer">
                IOS Configuration PDF</a>
            <p>2. <a href={require('../Document/Mac-OSX-Setup.pdf')} target="_blank" rel="noopener noreferrer">
                Mac OSX configuration</a>
                <p>3. <a href={require('../Document/Windows-7-OS-setup.pdf')} target="_blank" rel="noopener noreferrer">
                Windows 7 Setup</a>
                    </p>
                    </p>
                    </p>
        </div>
        <footer className="footer-1">
        <div className="footer-content-1">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </footer>
        </>
        
    )
}
export default Techsupport;