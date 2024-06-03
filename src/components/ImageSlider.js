import React from 'react';
import '../App.css'

const ImageSlider = ({ images }) => {
  return (
    <div className="w-screen flex overflow-x-scroll scrollbar-hide p-4">
      {images.map((item, index) => (
        <div key={index} className="m-5 flex-none w-60 bg-white">
          <img src={item.image} alt={item.caption} className="h-40 object-cover" />
          <p className="text-center mt-2">{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
