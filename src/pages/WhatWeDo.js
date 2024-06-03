import React from 'react';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import bg from '../images/bg1.png';
import branding from '../images/branding.jpg';
import graphic from '../images/graphic.jpg';
import D from '../images/3d.jpg';
import uiux from '../images/uiux.jpg';
import dev from '../images/frontbckdev.jpg';
import content from '../images/content.jpg';
import integration from '../images/integration.jpg';

const images = [
  { image: branding, caption: 'Branding' },
  { image: graphic, caption: 'Graphic Design' },
  { image: D, caption: '3D Design' },
  { image: uiux, caption: 'UI/UX Design' },
  { image: dev, caption: 'Front & Back-end Development' },
  { image: content, caption: 'Content Creation' },
  { image: integration, caption: 'System Integration' }
];

const WhatWeDo = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='h-screen flex flex-col justify-center items-center gap-10'>

        <div className='sm:text-6xl md:text-7xl flex flex-col justify-center text-5xl'>WHAT WE DO</div>

          <div className="flex flex-col justify-between"><ImageSlider images={images} />
        
        </div>
      </div>
      <Footer prevPage={"WHO WE ARE"} prevRoute={"/who-we-are"} nextPage={"OUR TEAM"} nextRoute={"/our-team"} />
    </div>
  );
};

export default WhatWeDo;
