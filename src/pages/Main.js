// Main.js
import React from 'react';
import Footer from '../components/Footer';
import bg from '../images/main.png';

const Main = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Content of your Main component */}
      <div>
        hello world
      </div>
      <Footer nextPage="WHO WE ARE" nextRoute="/who-we-are" />
    </div>
  );
};

export default Main;
