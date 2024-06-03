// Main.js
import React from 'react';
import Footer from '../components/Footer';
import bg from '../images/main.png';

const Main = () => {
  return (
    <div className="h-screen " style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='w-screen h-full flex flex-col justify-center items-center'>
        <div className='w-[340px] sm:w-[500px] sm:text-6xl md:w-7/12 md:text-7xl flex flex-col justify-center text-5xl gap-3'>
          <div>WE CREATE</div>
          <div className=' flex place-self-end'>BEST DIGITAL</div>
          <div>PRODUCTS.</div>
        </div>

        <div className='pl-10 sm:pl-20 md:pl-40 lg:pl-60 p-14 flex place-self-start'>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-44 h-20 border-2 border-black rounded-full transform rotate-20"></div>
          <div className="absolute w-44 h-20 border-2 border-black rounded-full transform -rotate-20"></div>
          <button className="relative text-center text-black text-sm">
            <div>
            DISCUSS 
            </div>
            <div>
            THE PROJECT
            </div>
          </button>
        </div>
      </div>

      <div className='w-screen md:px-20 gap-5 p-5 flex place-content-between'>
        <div className='w-80'>WE ARE THE LEADERS IN WEB AND MOBILE DESIGN AND DEVELOPMENT INDUSTRY</div>
        <div className=' text-sm w-80'>We  create quality content and cool ideas. We create websites, applications, 3D desings, motion design and animations. We bring the most daring idea to life.</div>
      </div>


      </div>
      
      
      <Footer nextPage="WHO WE ARE" nextRoute="/who-we-are" />
    </div>
  );
};

export default Main;
