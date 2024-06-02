import React from 'react'
import Footer from '../components/Footer'
import bg from '../images/bg2.png'

const WhoWeAre = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Footer prevPage={"MAIN"} prevRoute={"/"} nextPage={"WHAT WE DO"} nextRoute={"/what-we-do"}/>
    </div>
  )
}

export default WhoWeAre