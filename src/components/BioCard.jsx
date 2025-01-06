import React from 'react'
import social1 from "/public/social (1).png"
import social2 from "/public/social (2).png"
import social3 from "/public/social (3).png"
import social4 from "/public/social (4).png"

import photo from "/public/photo.jpg"
import "/src/css/BioCard.css"

function BioCard() {
  return (
    <div className='profile-div '>
        <div className='img-comp '>
            <img src={photo} alt="" className='h-[300px] w-full object-cover brightness-[.7]  rounded-2xl'/>
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