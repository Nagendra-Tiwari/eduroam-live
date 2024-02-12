
import { Link , useLocation} from 'react-router-dom';
import './Indian.css';
import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const TableComponentLeft = ({ leftColumnData }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            
          </tr>
        </thead>
        <tbody>
          {leftColumnData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const TableComponentRight = ({ rightColumnData }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            
          </tr>
        </thead>
        <tbody>
          {rightColumnData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const Indian = () => {
  const initialLeftColumnData = [
      { name: 'Birla Institute Of Technology Mesra, Jaipur, Rajasthan' },
      { name: 'Malaviya National Institute of Technology, Jaipur, Rajasthan' },
      { name: 'Government Women Engineering College Ajmer, Rajasthan' },
      { name: 'Rajasthan Technical University, Rajasthan' },
      { name: 'Sir Padampat Singhania University, Udaipur, Rajasthan' },
      { name: 'North Eastern Hill University, Shillong, Meghalaya' },
      { name: 'National Institute of Technology, Agartala, Tripura' },
      { name: 'Indian Institute of Technology, Jammu' },
      { name: 'University of Jammu, Jammu and Kashmir' },
      { name: 'Indian Institute of Information Technology, Manipur' },
      { name: 'Manipur University, Imphal, Manipur' },
      { name: 'D.M.College of Commerce, Imphal, Manipur' },
      { name: 'G.P.Women’s College, Imphal, Manipur' },
      { name: 'SIKKIM MANIPAL UNIVERSITY, Gangtok, Sikkim' },
      { name: 'All India Institute of Medical Sciences (AIIMS), Jharkhand' },
      { name: 'Birla Institute Of Technology Mesra, Lalpur, Jharkhand' },
      { name: 'Birla Institute Of Technology Mesra, Deoghar, Jharkhand' },
      { name: 'Birla Institute Of Technology Mesra, Ranchi, Jharkhand' },
      { name: 'Indian School of Mines, Dhanbad, Jharkhand' },
      { name: 'Rajendra Institute of Medical Sciences, Ranchi, Jharkhand' },
      { name: 'Indian Institute of Technology Kharagpur, West Bengal' },
      { name: 'Indian Institute of Management, Kolkata, West Bengal' },
      { name: 'Indian Institute of Science Education and Research, Kolkata, West Bengal' },
      { name: 'Indian Statistical Institute, Kolkata, West Bengal' },
      { name: 'National institute of technology, Durgapur, West Bengal' },
      { name: 'Variable Energy Cyclotron Center, Kolkata, West Bengal' },
      { name: 'National Institute of Electronics & Information Technology(NIELIT), Kolkata, West Bengal' },
      { name: 'AICTE Head Quarters, Delhi' },
      { name: 'Plaksha University, Punjab' },
      { name: 'Shri Shankaracharya Institute of Professional Management and Technology, Raipur' },
      { name: 'Birla Institute Of Technology Mesra, Kolkata, West Bengal' },
      { name: 'Jalpaiguri Govt. Engineering College, West Bengal' },
      { name: 'Institute Of Genetic Engineering, Kolkata, West Bengal' },
      { name: 'Neotia Institute of technology, West Bengal' },
      { name: 'Indian Association for the Cultivation of Science, Kolkata, West Bengal' },
      { name: 'Indian Institute Of Technology, Mumbai, Maharastra' },
      { name: 'Indian Institute of Science Education and Research, Pune, Maharastra' },
      { name: 'National Institute Of Immunology, Mumbai, Maharastra' },
      { name: 'The Inter-University Centre for Astronomy and Astrophysics, Pune, Maharastra' },
      { name: 'Tata Institute of Fundamental Research (Tata Institute of Fundamental Research (TIFR)), Mumbai, Maharastra' },
      { name: 'Savitribai Phule Pune University, Pune, Maharastra' },
      { name: 'Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha, Maharastra' },
      { name: 'King Edwards Memorial Hospital, Mumbai, Maharastra' },
      { name: 'Homi Bhabha Centre for Science Education-Tata Institute of Fundamental Research (TIFR), Mumbai, Maharastra' },
      { name: 'National Centre for Radio Astrophysics- Tata Institute of Fundamental Research (TIFR), Pune, Maharastra' },
      { name: 'Lokmanya Tilak Muncipal Medical College, Mumbai, Maharastra' },
      { name: 'Dept. of Biological Sciences at Tata Institute of Fundamental Research, Mumbai, Maharastra' },
      { name: 'Veermata Jijabai Technological Institute Mumbai, Maharastra' },
      { name: 'Indian Institute Of Technology, Kanpur, Uttar Pradesh' },
      { name: 'Indian Institute Of Management, Lucknow, Uttar Pradesh' },
      { name: 'Birla Institute Of Technology Mesra, Noida, Uttar Pradesh' },
      { name: 'Birla Institute Of Technology Mesra, Allahabad, Uttar Pradesh' },
      { name: 'Main Campus, Banaras Hindu University, Varanasi, Uttar Pradesh' },
      { name: 'Institute of Agricultural Science, Banaras Hindu University, Varanasi, Uttar Pradesh' },
      { name: 'Institute of Medical Sciences, Banaras Hindu University, Varanasi, Uttar Pradesh' },
      { name: 'Allahabad University, Uttar Pradesh' },
      { name: 'Galgotias University, Greater Noida, Uttar Pradesh' },
      { name: 'Harish Chandra Research Institute, Allahabad, Uttar Pradesh' },
      { name: 'Babasaheb Bhimrao Ambedkar University, Lucknow, Uttar Pradesh' },
      { name: 'Centre of Bio-Medical Research (CBMR) Lucknow, Uttar Pradesh' },
      { name: 'Jagatpur PG College, Banaras (N), Uttar Pradesh' },
      { name: 'Motilal Nehru National Institute of Technology, Allahabad, Uttar Pradesh' },
      { name: 'Centre of Bio-Medical Research (CBMR) Lucknow, Uttar Pradesh' },
      { name: 'IEC College, Greater Noida, Uttar Pradesh' },
      { name: 'Indian Institute of Technology Mandi, Himachal Pradesh' },
      { name: 'National Institute of Technology Hamirpur, Himachal Pradesh' },
      { name: 'Indian Institute of Information Technology Una, Himachal Pradesh' },
      { name: 'Himachal Pradesh University, Himachal Pradesh' },
      { name: 'Chitkara University, Himachal Pradesh' },
      { name: 'Indian Institute of Technology, Patna, Bihar' },
      { name: 'Computer Centre -Indian Institute of Technology Patna, Bihar' },
      { name: 'Indian Institute of Technology, Gandhinagar, Gujarat' },
      { name: 'Indian Institute of Management, Ahmedabad, Gujarat' },
      { name: 'Indian Institute of Information Technology, Vadodara, Gujarat' },
      { name: 'Institute of Infrastructure Technology Research and Management, Ahmedabad, Gujarat' },
      { name: 'Charotar University Of Science & Technology, Anand, Gujarat' },
      { name: 'Anant National University, Ahmedabad, Gujarat' },
      { name: 'Indian Institute Of Technology, Hyderabad' },
      { name: 'Indian Institute of Technology, Dharwad, Karnataka' },
      { name: 'Indian Institute of Management, Bangalore, Karnataka' },
      { name: 'Indian Statistical Institute, Bangalore, Karnataka' },
      { name: 'Tata Institute of Fundamental Research Centre for Applicable Mathematics, Bangalore, Karnataka' },
      { name: 'National Centre for Biological Sciences, Bangalore, Karnataka' },
      { name: 'ERNET Regional Center, Bangalore, Karnataka' },
      { name: 'ERNET Office BANGALORE, Karnataka' },
      { name: 'Raman Research Institute, Bangalore, Karnataka' },
      { name: 'International Centre for Theoretical Sciences-Tata Institute of Fundamental Research Centre for Applicable Mathematics, Bangalore, Karnataka' },
      { name: 'Computer Centre-International Centre for Theoretical Sciences-Tata Institute of Fundamental Research Centre for Applicable Mathematics, Bangalore, Karnataka' },
      { name: 'Indian Institute Of Sciences, Bangalore, Karnataka' },
      { name: 'Jawaharlal Nehru Centre for Advanced Scientific Research, Bangalore, Karnataka' },
      { name: 'Computer Centre Jawaharlal Nehru Centre for Advanced Scientific Research, Bangalore, Karnataka' },
      { name: 'Institute for Stem Cell Science and Regenerative Medicine, Bangalore, Karnataka' },
      { name: 'Azim Premji University, Bangalore, Karnataka' },
      { name: 'Manipal Academy of Higher Education Manipal, Karnataka' },
      { name: 'International Institute Of Information Technology, Bangalore (N), Karnataka' },
      { name: 'Indian Institute of Technology, Madras, Tamil Nadu' },
      { name: 'Conference hall, IIT, Madras, Tamil Nadu' },
      { name: 'Indian Institute of Information Technology, Design & Manufacturing, Chennai, Tamil Nadu' },
      { name: 'ERNET India, Chennai, Tamil Nadu' },
      { name: 'SRM University, Chennai, Tamil Nadu' },
      { name: 'Computer Centre, SRM University, Chennai, Tamil Nadu' },
      { name: 'Karunya Institute of Technology and Sciences, Tamil Nadu' },
      { name: 'B.S.Abdur Rahman Crescent Institute of Science & Technology, Chennai, Tamil Nadu' },
      { name: 'Agricultural College & Research Institute (AC&RI), Tamil Nadu Agricultural University, Coimbatore, Tamil Nadu' },
      { name: 'School of Post Graduate Studies (SPGS), Tamil Nadu Agricultural University, Coimbatore, Tamil Nadu' },
      { name: 'Agricultural Engineering College & Research Institute (AEC&RI)-Tamil Nadu Agricultural University, Coimbatore, Tamil Nadu' },
      { name: 'Horticultural College & Research Institute (HC&RI)-Tamil Nadu Agricultural University, Coimbatore, Tamil Nadu' },
      { name: 'The Institute Of Mathematical Sciences, Chennai, Tamil Nadu' },
      { name: 'Agricultural College and Research Institute, Eachangkottai, Thanjavur, Tamil Nadu' },
      { name: 'Agricultural College and Research Institute, Kudumiyanmalai, Pudukkottai, Tamil Nadu' },
      { name: 'Horticultural College and Research Institute for Women, Trichy, Tamil Nadu' },
      { name: 'Horticultural College and Research Institute, Periyakulam, Theni, Tamil Nadu' },
      { name: 'Agricultural College and Research Institute, Madurai, Tamil Nadu' },
      { name: 'Home Science College and Research Institute, Madurai, Tamil Nadu' },
      { name: 'Agricultural Engineering College and Research Institute, Kumulur, Trichy, Tamil Nadu' },
      { name: 'Anbil Dharmalingam Agricultural College and Research Institute, Trichy, Tamil Nadu' },
      { name: 'Agricultural College and Research Institute, Killikulam, Tirunelveli, Tamil Nadu' },
      { name: 'Agricultural College and Research Institute, Vazhavachanur, Thiruvannamalai, Tamil Nadu' },
      { name: 'Forest College and Research Institute, Mettupalayam, Tamil Nadu' },
      { name: 'Madras Veterinary College, Chennai, Tamil Nadu' },
      { name: 'Veterinary College and Research Institute, Namakkal, Tamil Nadu' },
      { name: 'Veterinary College and Research Institute, Orathanadu, Tamil Nadu' },
      { name: 'Veterinary College and Research Institute, Tirunelveli, Tamil Nadu' },
      { name: 'Lakshmibai College, Delhi' },
      { name: 'Maharaja Agrasen College, Delhi' },
      { name: 'Bhagini Nivedita College, Delhi' },
      { name: 'Maharshe Valmiki College of Education, Delhi' },
      
  
  ];

  const initialRightColumnData = [
    
      { name: 'Maitreyi College, Delhi' },
      { name: 'Bhaskaracharya College of Applied Sciences, Delhi' },
      { name: 'Mata Sundri College, Delhi' },
      { name: 'Bhim Rao Ambedkar College, Delhi' },
      { name: 'Miranda House, Delhi' },
      { name: 'College of Vocational Studies, Delhi' },
      { name: 'Moti Lal Nehru College (Morning), Delhi' },
      { name: 'Daulat Ram College, Delhi' },
      { name: 'Motilal Nehru College (Evening), Delhi' },
    { name: 'Deen Dayal Upadhayaya College, Delhi' },
    { name: 'Pannalal Girdharlal Dayanand Anglo-Vedic College, Delhi' },
    { name: 'Delhi College of Arts & Commerce, Delhi' },
    { name: 'Pannalal Girdharlal Dayanand Anglo-Vedic College College (Evening), Delhi' },
    { name: 'Deshbandhu College, Delhi' },
    { name: 'Rajdhani College, Delhi' },
    { name: 'Ram Lal Anand College, Delhi' },
    { name: 'Dyal Singh College (Evening), Delhi' },
    { name: 'Ramanujan College, Delhi' },
    { name: 'Gargi College, Delhi' },
    { name: 'Bharati College, Delhi' },
    { name: 'Ramjas College, Delhi' },
    { name: 'Atma Ram Sanatan Dharam College, Delhi' },
    { name: 'Dyal Singh College, Delhi' },  
      { name: 'College of Food and Dairy Technology, Koduveli, Alamathi, Chennai, Tamil Nadu' },
      { name: 'Veterinary College and Research Institute, Thalaivasal, Salem, Tamil Nadu' },
      { name: 'Chennai Mathematical Institute, Tamil Nadu' },
      { name: 'Loyola-ICAM College of Engineering and Technology, Loyola Campus, Chennai, Tamil Nadu' },
      { name: 'Tamilnadu Veterinary and Animal Sciences University, Chennai, Tamil Nadu' },
      { name: 'Crescent Institute of Science & Technology, Chennai, Tamil Nadu' },
      { name: 'College of Poultry Production and Management, Hosur, Tamil Nadu' },
      { name: 'Shiv Nadar University, Greater Noida, Uttar Pradesh' },
      { name: 'Indian Institute of Technology Ropar, Punjab' },
      { name: 'Central University of Punjab, Punjab' },
      { name: 'Indian Institute of Science Education and Research, Mohali' },
      { name: 'Government Medical College, Amritsar, Punjab' },
      { name: 'Guru Govind Singh Medical College and hospital, Faridkot, Punjab' },
      { name: 'Guru Nanak Dev Engineering College, Ludhiana, Punjab' },
      { name: 'Chitkara University, Punjab' },
      { name: 'Postgraduate Institute of Medical Education and Research, Chandigarh' },
      { name: 'Indian Institute of Technology, Palakkad, Kerala' },
      { name: 'Indian Institute of Science Education and Research, Kerala' },
      { name: 'Amal Jyothi College of Engineering, Kerala' },
      { name: 'KMEA Engineering College, Kerala' },
      { name: 'National Institute of Technology, Calicut, Kerala' },
      { name: 'All India Institute Of Medical Sciences Patna, Bihar' },
      { name: 'Birla Institute Of Technology Mesra, Patna, Bihar' },
      { name: 'Darbhanga Medical College, Darbhanga, Bihar' },
      { name: 'Indian Institute of Technology, Roorkee, Uttrakhand' },
      { name: 'Indian Institute Of Management, Kashipur, Uttarakhand' },
      { name: 'Computer Centre-University of Petroleum & Energy Studies, Dehradun, Uttarakhand' },
      { name: 'All India Institute of Medical Sciences, Rishikesh, Uttarakhand' },
      { name: 'University of Petroleum & Energy Studies, Dheradun, Uttarakhand' },
      { name: 'Indian Institute of Technology, Indore, Madhya Pradesh' },
      { name: 'Indian Institute of Information Technology, Design and Manufacturing, Jabalpur, Madhya Pradesh' },
      { name: 'Indian Institute of Science Education and Research, Bhopal, Madhya Pradesh' },
      { name: 'Maulana Azad National Insitute of Technology, Bhopal, Madhya Pradesh' },
      { name: 'Indira Gandhi National Tribal University, Amarkantak, Madhya Pradesh' },
      { name: 'National Institute of Technical Teacher’s Training and Research, Bhopal, Madhya Pradesh' },
      { name: 'Jagran Lakecity University, Bhopal, Madhya Pradesh' },
      { name: 'Indian Institute of Technology, Tirupati, Andhra Pradesh' },
      { name: 'Indian Institute of Information Technology Sri City, Andhra Pradesh' },
      { name: 'Indian Istitute of Science Education and Research, Tirupati, Andhra Pradesh' },
      { name: 'Computer Centre- Indian Institute of Science Education and Research, Tirupati, Andhra Pradesh' },
      { name: 'SVEC – Sree Vidyanikethan Engineering College, Tirupati, Andhra Pradesh' },
      { name: 'Indian Institute of Technology Goa' },
      { name: 'Indian Institute of Technology, Delhi' },
      { name: 'National Institute of Technology, Delhi' },
      { name: 'National Institute Of Pathology, New Delhi' },
      { name: 'International Centre For Genetic Engineering And Biotechnology, New Delhi' },
      { name: 'Indian National Science Academy, New Delhi' },
      { name: 'IEC College, Greater Kailash, Delhi' },
      { name: 'Delhi Technological University, Delhi (N)' },
      { name: 'National Institute of Electronics & Information Technology(NIELIT), New Delhi (N)' },
      { name: 'Institute of Home Economics, Delhi' },
      { name: 'Ambedkar University, Delhi' },
      { name: 'Indraprastha Institute of Information Technology, Delhi' },
      { name: 'ERNET India, Delhi' },
      { name: 'Jawaharlal Nehru University, Delhi' },
      { name: 'Shri Shankaracharya Institute of Professional Management and Technology Raipur' },
      { name: 'Guru Gobind Singh Indraprastha University, Delhi' },
      { name: 'South Asian University, Delhi' },
      { name: 'Delhi University, New Delhi.' },
      { name: 'Jamia Hamdard University ,New Delhi' },
      { name: 'Vivekananda College, Delhi' },
      { name: 'Shaheed Sukhdev College of Business Studies, Delhi' },
      { name: 'Ahilya Bai College Of Nursing, Delhi' },
      { name: 'Indraparstha College For Women, Delhi' },
      { name: 'Acharya Narendra Dev College, Delhi' },
      { name: 'Aditi Mahavidyalya, Delhi' },
      { name: 'Lady Shri Ram College, Delhi' },
      { name: 'Aryabhatta College (Ram lal College evening), Delhi' },  
      { name: 'Hans Raj College, Delhi' },
      { name: 'Hindu College, Delhi' },
      { name: 'Satyawati College (Evening), Delhi' },
      { name: 'Indira Gandhi Institute of Physical Education & Sports Sciences, Delhi' },
      { name: 'Shaheed Bhagat Singh College, Delhi' },
      { name: 'Indraprastha College, Delhi' },
      { name: 'Shaheed Bhagat Singh College (Evening), Delhi' },
      { name: 'Shaheed Rajguru College of Applied Sciences, Delhi' },
      { name: 'Janki Devi Memorial College, Delhi' },
      { name: 'Jesus and Mary College, Delhi' },
      { name: 'Shivaji College, Delhi' },
      { name: 'Kalindi College, Delhi' },
      { name: 'Shri Ram College of Commerce, Delhi' },
      { name: 'Kamla Nehru College, Delhi' },
      { name: 'Shyam Lal College, Delhi' },
      { name: 'Keshav Mahavidyalaya, Delhi' },
      { name: 'Shyam Lal College (Evening), Delhi' },
      { name: 'Kirori Mal College, Delhi' },
      { name: 'Shyama Prasad Mukherjee College, Delhi' },
      { name: 'Lady Irwin College, Delhi' },
      { name: 'Sri Aurobindo College, Delhi' },
      { name: 'Sri Aurobindo College (Evening), Delhi' },
      { name: 'Swami Shradhanand College, Delhi' },
      { name: 'Sri Guru Gobind Singh College of Commerce, Delhi' },
      { name: 'St. Stephen’s College, Delhi' },
      { name: '43rd APAN INDIA, NEW DELHI.' },
      { name: 'National knowledge network, Shastri Park, New Delhi.' },
      { name: 'Satyawati College, Delhi' },
  ];
  
    const [leftColumnData, setLeftColumnData] = React.useState(initialLeftColumnData);
    const [rightColumnData, setRightColumnData] = React.useState(initialRightColumnData);
  const location =useLocation();
  return (
    <>
    <Nav/>
    <h1 className="text">Indian Presence</h1>
          <hr></hr>
          <p className="text01">The following campuses are eduroam enabled and upcomings :-</p>
          <div className="container">
      <div className="left-column">
        
        <TableComponentLeft leftColumnData={leftColumnData}  />
      </div>
      <div className="right-column">
        
        <TableComponentRight  rightColumnData={rightColumnData} />
      </div>
      
    </div>
      <Footer/>
    </>
  );
}

export default Indian;
