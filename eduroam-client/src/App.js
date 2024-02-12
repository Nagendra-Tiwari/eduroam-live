// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/homepage/main';
import Testimonial from './components/Testimonial/Testimonial';
import Indian from './components/Indian Presence/Indian';
import Techsupport from './components/Techsupport/Techsupport';
import Contact from './components/Contact/Contact';
import Requestform from './components/Requestform/Requestform';
import About from './components/About/About';
import Register from './components/Register/register.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/indianpresence" element={<Indian/>} />
        <Route path="/techsupport" element={<Techsupport/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/requestform" element={<Requestform/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
