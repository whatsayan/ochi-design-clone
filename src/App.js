import React, { useState } from 'react'
import Navbar from './componenets/Navbar'
import LandingPage from './componenets/LandingPage'
import Marquee from './componenets/Marquee'
import About from './componenets/About'
import Eyes from './componenets/Eyes'
import Featured from './componenets/Featured'
import Reviews from './componenets/Reviews'
import Cards from './componenets/Cards'
import StartProject from './componenets/StartProject'
import Footer from './componenets/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [toggleNavMenu, setToggleNavMenu] = useState(false);
  return (
    <div className='  bg-zinc-800 text-white w-screen overflow-x-hidden'>
      <Navbar toggleNavMenu={toggleNavMenu} setToggleNavMenu={setToggleNavMenu}/>
      {
        !toggleNavMenu && <div >
          <LandingPage />
          <Marquee />
          <About />
          <Eyes />
          <Featured />
          <Reviews />
          <Cards />
          <StartProject />
          <Footer />
        </div>
      }
    </div>
  )
}

export default App