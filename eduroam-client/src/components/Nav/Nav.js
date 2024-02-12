import { Link, useLocation} from 'react-router-dom';
import React from 'react';

const Nav=()=>{
    const location =useLocation();
    return(
        <>


<nav className="navbar">
      <div className="navbar-logo">
        <img
          src={require("../images/mainlogo.png")}
          alt="Logo"
          className="logo-image"
        />
       
      </div>

      <ul className="nav-list">
      <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <a href="/">Home</a>
        </li>
        <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
          <a href="/about">About</a>
        </li>
        <li className={`nav-item ${location.pathname === '/testimonial' ? 'active' : ''}`}>
          <Link to="/testimonial">Testimonial</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/indianpresence' ? 'active' : ''}`}>
          <Link to="/indianpresence">Indian Presence</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/techsupport' ? 'active' : ''}`}>
          <a href="/techsupport">Tech-Support</a>
        </li>
        <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/requestform' ? 'active' : ''}`}>
          <a href="/requestform">Request Form</a>
        </li>
      </ul>
    </nav>
    </>
    )
}
export default Nav;