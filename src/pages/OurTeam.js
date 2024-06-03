import React from 'react'
import Footer from '../components/Footer'
import bg from '../images/bg1.png'
import me from '../images/me.jpg'

const OurTeam = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='h-full flex flex-col justify-center items-center gap-10'>

        <div className='sm:text-6xl md:text-7xl flex flex-col justify-center text-5xl'>OUR TEAM</div>
        

        <div className='flex flex-wrap  items-center justify-center gap-10'>
        <div className=' lg:text-5xl text-3xl flex flex-col lg:gap-3 sm:gap-1 text-slate-500'>
          <div className='pl-10'>JOSEPH RAY</div>
          <div className='text-black'>MICHAEL WALKER</div>
          <div className='pl-10'>DIANA CAMPBELL</div>
          <div>LORI HOUSTON</div>
          <div className='pl-10'>THERESA FULLER</div>
        </div>
        <div className='flex gap-5 justify-center items-center'>
          <div className='w-40 md:w-52'><img src={me} alt={'MICHAEL WALKER'}/></div>
          <div className='flex flex-col gap-2'>
            <div className=' font-semibold'>MICHAEL WALKER</div>
            <div className='text-sm text-gray-500'>team lead designer</div>
            <div className='w-40 sm:w-60 text-sm'>I am the chief designer and supervise the rest of the guys. Together we create promising and useful products for our customers.</div>
          </div>
        </div>
        </div>

        
      </div>
        <Footer prevPage={"WHAT WE DO"} prevRoute={"/what-we-do"} nextPage={"CONTACT US"} nextRoute={"/contact-us"}/>
    </div>
  )
}

export default OurTeam