import React from 'react'
import SideCard from '../components/SideCard'

function Education() {
  return (
    <div className='my-[20px] h-auto mx-[20px]' id='education'>
        <h1 className='font-bold text-center lg:text-left text-[40px] lg:text-[100px] text-[#ffff] leading-tight font-Pop pt-[20px] mt-[150px]'>EDUCATION</h1>
        <SideCard
        title = "Bachelor's in Information Technology"
        content= "St. Vincent Pallotti College of Engineering and Technology, Nagpur"
        content2= "2021-2025"/>
        <SideCard
        title = "Higher Secondary School "
        content= "Kendriya Vidyalaya Ajni, Nagpur"
        content2= "2019-2021"/>

    </div>
  )
}

export default Education