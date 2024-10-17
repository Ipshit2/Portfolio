import React from 'react'
import logo from "/public/nav.png"
import logo1 from "/public/nav (1).png"
import logo2 from "/public/nav (2).png"
import logo3 from "/public/nav (3).png"
import logo4 from "/public/nav (4).png"
import "/src/css/Header.css"

function Header() {
  return (
    <div className=' flex justify-center'>
        <div className='nav '>
            <a href="#home">
            <div className='nav-comp '>
                <div className='nav-comp-text'>Home</div>
                <img src={logo2} alt=""  className='nav-comp-img '/>
            </div>
            </a>
            
            <a href="#project">
            <div className='nav-comp '>
                <div className='nav-comp-text'>Projects</div>
                <img src={logo1} alt=""  className='nav-comp-img '/>
            </div>
            </a>

            <a href="#skills">
            <div className='nav-comp '>
                <div className='nav-comp-text'>Skills</div>
                <img src={logo} alt=""  className='nav-comp-img '/>
            </div>
            </a>
            
            <a href="#education">
            <div className='nav-comp '>
                <div className='nav-comp-text'>Education</div>
                <img src={logo3} alt=""  className='nav-comp-img '/>
            </div>
            </a>

            <a href="#contact">
            <div className='nav-comp '>
                <div className='nav-comp-text'>Contact</div>
                <img src={logo4} alt=""  className='nav-comp-img '/>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Header