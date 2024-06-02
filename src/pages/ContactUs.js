// ContactUs.js
import React from 'react';
import Footer from '../components/Footer';
import bg from '../images/contact.png';
import bg1 from '../images/bg1.png';

const ContactUs = () => {
  return (
    <div className="h-screen flex flex-col justify-between" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex-grow m-8  relative">
        <div className="absolute rounded-3xl inset-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 10 }}>
          {/* Your content goes here */}
        </div>
      </div>
      <Footer prevPage="OUR TEAM" prevRoute="/our-team" />
    </div>
  );
};

export default ContactUs;
