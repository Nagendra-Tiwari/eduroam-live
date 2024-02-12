// Testimonial.js
import React from 'react';
import './Testimonial.css'; // Import your CSS file for styling
import { Link,useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Nav from '../Nav/Nav';




const testimonials = [
  {
    id: 1,
    icon: require('../images/bhu.png'),
    name: 'Banaras Hindu University , Varansi',
    content:'Excellent service both ways. Now eduroam is floated across BHU. Further, all our database of teachers is floated on radius.Many people traveling abroad are using it a lot.'
        },
 
  {
    id: 2,
    icon: require('../images/ccjabalpur.png'),
    name: 'Computer Centre, IIITDM, Jabalpur',
    content: 'Thanks a lot for your support and cooperation for enabling our campus eduroam enabled. We hope your kind support with us whenever we need your help regarding eduroam.',
  },

  {
    id: 3,
    icon: require('../images/iimkashipur.png'),
    name: 'Indian Institute of Management Kashipur',
    content: 'The eduroam service has been successfully installed at IIM Kashipur and Technical support given by you was excellent.',
  },

  {
    id: 4,
    icon: require('../images/iimbangalore.png'),
    name: 'IIM Bangalore',
    content: 'Thank you for the support provided during the configuration and testing of eduroam. ',
  },

  {
    id: 5,
    icon: require('../images/iithyderabad.png'),
    name: 'IIT, Hyderabad',
    content: 'Thanks for making us a part of eduroam community. Our users are very much satisfied with the service.',
  },


  {
    id: 6,
    icon: require('../images/istf.png'),
    name: 'Information System & Technology Facility (ISTF)',
    content: 'First of all thanks a lot for your effort and invest your time to configure “eduroam” at IIT Gandhinagar. We appreciate it.We checked the log at our end and figure it out your servers is working fine because we received the authentication request from your server. for security purpose, we had disabled radtest authentication in our primary radius server. Otherwise, it is working without any issue.I once again would like to thank you for taking out your invaluable time and helping us with the setup.',
  },


  {
    id: 7,
    icon: require('../images/delhi.jpg'),
    name: 'University of Delhi, New Delhi',
    content: 'Excellent Facility.',
  },


  {
    id: 8,
    icon: require('../images/iithyderabad.png'),
    name: 'IITH',
    content: 'Thanks for your kind support, I’m able to connect with my Active Directory credentials in Eduroam.',
  },


  {
    id: 9,
    icon: require('../images/istf.png'),
    name: 'Institute Computer Center IIT-Roorkee',
    content: ' Thanks to deployed the eduroam service in our campus. All our users are frequently using the eduroam service in local campus or from roaming and they are happy to use this facility. Specially we are very thanks to eduroam’s Mukesh Kumar and eduroam team. They helped to implement eduroam service in our campus and also they provided the technical support as required.',
  },


  {
    id: 10,
    icon: require('../images/iitjodhpur.png'),
    name: 'Indian Institute of Technology Jodhpur',
    content: 'Thanks for the eduroam service for IIT Jodhpur. it is working well. Special thanks for Eduroam support team.',
  },



  {
    id: 11,
    icon: require('../images/insca.png'),
    name: 'Indian National Science Academy, New Delhi ',
    content: 'Thanks for your support in establishing Eduroam facility in our University of Hyderabad.',
  },
  {
    id: 12,
    icon: require('../images/uoh.jpg'),
    name: 'University of Hyderabad',
    content: 'Thanks for your support in establishing Eduroam facility in our University of Hyderabad.',
  },
  {
    id: 13,
    icon: require('../images/iiser.png'),
    name: 'IISER, Mohali, Punjab',
    content: 'Excellent project, need of the era. Smooth Access everywhere.',
  },
  {
    id: 14,
    icon: require('../images/iitdelhi.png'),
    name: 'Indian Institute of Technology Delhi',
    content: 'Indeed, EDUROAM has been working very well at IITD. Since we started the service, over 50 visitors to IITD (several of them for long term) have used the EDUROAM service at IITD. Several of our students and faculty have also used EDUROAM while travelling abroad. ',
  },
  {
    id: 15,
    icon: require('../images/iitchennai.png'),
    name: 'Indian Institute of Technology, Chennai',
    content: 'Very prompt response for any request and help.',
  },
  {
    id: 16,
    icon: require('../images/neshillong.png'),
    name: 'North-Eastern Hill University, Shillong',
    content: 'Thank you and appreciated that you could completed the process within a short time.We will be adding student users now to the Mail/LDAP server and I hope that the synchronisation with the radius server you have configured is automatic.',
  },
  {
    id: 17,
    icon: require('../images/iisbengaluru.png'),
    name: 'Indian Institute of Science, Bengaluru',
    content: 'Thanks for enabling the eduroam service. IISc faculty and visitors to IISc find it very helpful.',
  },
  {
    id: 18,
    icon: require('../images/nbrc.png'),
    name: 'National Brain Research Centre, Haryana',
    content: 'We sincerely thanks for all your efforts in setting up the eduroam service at our institution. The service is operational and we will monitor and update you in case of any issues noticed. ',
  },
  
];

function Testimonial() {
  const location =useLocation();
  return (
  <>
     <Nav/>
    <div className="testimonial-container">
      <h1>Testimonials</h1>
      <TransitionGroup className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <CSSTransition key={testimonial.id} timeout={500} classNames="fade">
          <div key={testimonial.id} className="testimonial-card">
             <img
                src={testimonial.icon}
                alt={`Icon for ${testimonial.name}`}
                className="testimonial-icon"
              />
            
            <p className="pcontent">{testimonial.content}</p>
            <h2 className="name">{testimonial.name} </h2>
          </div>
          </CSSTransition>
        ))}
        </TransitionGroup>

      </div>
     <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Testimonial;
