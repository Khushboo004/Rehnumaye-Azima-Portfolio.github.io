import React from 'react'
import HeroSection from './HeroSection '
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import AcademicProject from './AcademicProject'
import Skils from './Skils'

const MyProtfolio = () => {
  return (
    <div className="svg">
       <Navbar />
      <HeroSection />
      <AboutMe />
      <Skils />
      <AcademicProject />
        
    </div>
  )
}

export default MyProtfolio