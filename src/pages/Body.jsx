import React from 'react'
import BioCard from '../components/BioCard'
import Home from '../pages/Home'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'
import Project from './Project'


function Body() {
  
  return (
    <div  className='h-auto w-auto mx-[40px] lg:mx-[200px] my-10 lg:flex'>
        <div className='w-full lg:w-2/6 '>
        <BioCard/>

        </div>
        <div className=' w-full lg:w-4/6'>
        <Home />
        <Project/>
        <Skills/>
        <Education/>
        <Contact/>
        
        </div>

    </div>
  )
}

export default Body