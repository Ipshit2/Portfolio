import React from 'react'
import social1 from "D:/portfolio/portfolio/public/social  (1).png"
import social2 from "D:/portfolio/portfolio/public/social  (2).png"
import social3 from "D:/portfolio/portfolio/public/social  (3).png"
import social4 from "D:/portfolio/portfolio/public/social  (4).png"
import "D:/portfolio/portfolio/src/css/BioCard.css"

function BioCard() {
  return (
    <div className='profile-div '>
        <div className='img-comp '>
            <img src="" alt="" className='h-full w-full hidden rounded-2xl'/>
        </div>
        <h1 className='name '>IPSHIT HASTE</h1>
        <h1 className='about'>Fresher skilled in Full Stack Development, eager to apply knowledge to create innovative solutions. </h1>
        <div className='social'>
            <a href="https://github.com/Ipshit2">
                <div className='social-div'>
                    <img src={social2} alt="github" className='social-div-icon'/>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/ipshit-haste-4bb14b267/">
                <div className='social-div'>
                    <img src={social3} alt="linkedin" className='social-div-icon'/>
                </div>
            </a>
            <a href="">
                <div className='social-div'>
                    <img src={social4} alt="mail" className='social-div-icon'/>
                </div>
            </a>
            <a href="https://x.com/">
                <div className='social-div'>
                    <img src={social1} alt="twitter" className='social-div-icon'/>
                </div>
            </a>
            
            
            

        </div>
    </div>
  )
}

export default BioCard