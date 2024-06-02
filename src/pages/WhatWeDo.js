import React from 'react'
import Footer from '../components/Footer'
import bg from '../images/bg1.png'

const WhatWeDo = () => {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Footer prevPage={"WHO WE ARE"} prevRoute={"/who-we-are"} nextPage={"OUR TEAM"} nextRoute={"/our-team"}/>
    </div>
  )
}

export default WhatWeDo