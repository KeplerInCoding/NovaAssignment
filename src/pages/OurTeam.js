import React from 'react'
import Footer from '../components/Footer'
import bg from '../images/bg1.png'

const OurTeam = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Footer prevPage={"WHAT WE DO"} prevRoute={"/what-we-do"} nextPage={"CONTACT US"} nextRoute={"/contact-us"}/>
    </div>
  )
}

export default OurTeam