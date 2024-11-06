import React from 'react'
import Hero from './Hero'
import Ntplvideo from './Ntplvideo'
import Service from './Service'
import Home_part4 from './Home_part4'
import Home_part5 from './Home_part5'
import Slider from './Slider'
import About66 from '../About/About66'
import Slider1 from './Slider1'
import CaptionCards from './CaptionCards'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Ntplvideo/>
        {/* <Service/> */}
        <CaptionCards/>
        <Home_part4/>
        <Home_part5/>
        {/* <Slider/> */}
        <Slider1/>
        <About66/>

    </div>
  )
}

export default Home