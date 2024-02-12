import React from 'react';
import './main.css'; // Import your CSS file with styling
import { Link, useLocation} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


function Main() {
  const location =useLocation();
  
  return (
    <>
     <Nav/>
      <div className="content-container">
        <div>
        <img src= {require('../images/imageA.png')}  alt='image' className='mainimg' />
        </div>
        </div>
     
      <div className='content'>
        <div className='left'>
            <h1 className='head'>Presence of Eduroam in India</h1>

            <img src={require('../images/map.png')} alt='map' className='map'/>
        </div>

        <div className='right'>
        <img src={require('../images/dg.png')} alt='map' className='dg'/>
            <h1 className='ptext'>Message from Director General of ERNET India </h1>

            <p className ='ptxt'>Eduroam (Educational Roaming) is a global service which provides seamless high-speed, roaming internet access at multiple locations with one common wireless setup at the home institution.
            <br></br>
           It is secure and privacy-preserving technology which provides one stop solution that accommodates all the connectivity requirements for research and education of an institution which benefits students,
            researchers, faculty within the campus and visitors from participating institutions at national and international level. Therefore, it is highly recommended for institutes of higher education.
            I would request every educational institution to join Eduroam community to have a seamless connectivity to its members globally.</p>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Main;
