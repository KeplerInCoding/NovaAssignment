import React from 'react';
import Footer from '../components/Footer';
import bg from '../images/contact.png';
import bg1 from '../images/bg1.png';

const ContactUs = () => {
  return (
    <div className="h-screen flex flex-col justify-between" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex-grow m-12 mx-6 relative">
        <div className="absolute rounded-2xl inset-0" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 10 }}>
          <div className='h-full text-white flex flex-col justify-center items-center'>
            {/* heading */}
            <div className='text-center text-5xl sm:text-6xl md:text-7xl mb-5 md:mb-20'>
              CONTACT US
            </div>

            <div className='w-full flex flex-wrap place-content-between px-5 md:px-20 gap-5'>

              {/* component 1 */}
              <div className="flex flex-col items-center justify-center text-white">
                <h2 className="text-lg mb-4">Want to discuss your project?</h2>
                <div className="flex flex-col text-sm md:gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent border-b border-white placeholder-white focus:outline-none px-2 py-1"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border-b border-white placeholder-white focus:outline-none px-2 py-1"
                  />
                  <select
                    className="bg-transparent border-b border-white placeholder-white focus:outline-none px-1 py-2"
                  >
                    <option className='text-black' value="UI/UX Design">UI/UX Design</option>
                    <option className='text-black' value="Branding">Branding</option>
                    <option className='text-black' value="Graphic Design">Graphic Design</option>
                    <option className='text-black' value="3D Design">3D Design</option>
                    <option className='text-black' value="Front & Back-end Development">Front & Back-end Development</option>
                    <option className='text-black' value="Content Creation">Content Creation</option>
                    <option className='text-black' value="System Integration">System Integration</option>
                  </select>
                </div>
                <div className='flex justify-center place-self-end p-5'>
                  <div className="relative flex justify-center items-center">
                    <div className="absolute w-32 h-14 border-2 border-white rounded-full transform rotate-20"></div>
                    <div className="absolute w-32 h-14 border-2 border-white rounded-full transform -rotate-20"></div>
                    <button className="relative text-center text-sm">
                      <div>SEND</div>
                      <div>MESSAGE</div>
                    </button>
                  </div>
                </div>
              </div>



                {/* component 2 */}
              <div className='flex flex-col md:gap-5 text-sm'>
                <div>LOCATION</div>
                <div>London, UK <br />07 Manon Knolls <br />Lioydfurt WD6 %QD</div>
                <div>PHONE</div>
                <div>(204) 564-8765</div>
              </div>

              {/* component 3 */}
              <div className='flex flex-col md:gap-5 text-sm'>
                <div>EMAIL</div>
                <div>agency@gmail.com</div>
                <div>SOCIAL</div>
                <div className='flex flex-wrap gap-1 justify-center'>
                  <div className='underline'>facebook</div>
                  <div className='underline'>instagram</div>
                  <div className='underline'>twitter</div>
                </div>
              </div>


              </div>

          </div>
        </div>
      </div>
      <Footer prevPage="OUR TEAM" prevRoute="/our-team" />
    </div>
  );
};

export default ContactUs;
