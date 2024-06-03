import React from 'react'
import Footer from '../components/Footer'
import bg from '../images/bg2.png'
import team from '../images/team.jpg'

const WhoWeAre = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='h-full w-screen py-20 flex flex-col items-center justify-center'>
        <div className=' sm:text-6xl md:text-7xl flex flex-col justify-center text-5xl'>WHO WE ARE</div>
        <div className='flex flex-wrap place-content-evenly gap-5 w-full items-center  p-5 lg:py-10'>
          <div className='w-80 text-sm'>We are creative agency designs your best products. We help companies create or launch a refreshed brand, website design, and a modern visual communications.</div>
          <div className='w-80 text-sm'>The company is based out of London. Our agency specialized in human-centric digital experiences and improves the products every single day. Together with a team of professionals we come up with cool and important concepts, we will help your business reach a new level.</div>
          <img className='w-80 h-48' src={team} alt="team"/>
        </div>
      </div>
        <Footer prevPage={"MAIN"} prevRoute={"/"} nextPage={"WHAT WE DO"} nextRoute={"/what-we-do"}/>
    </div>
  )
}

export default WhoWeAre