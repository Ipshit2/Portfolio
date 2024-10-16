import React from 'react'
import arrow from "D:/portfolio/portfolio/public/arrow.png"

function SideCard({title, content, content2}) {
  return (
    <div className='cursor-pointer w-full h-auto rounded-2xl py-[20px] px-[20px] mt-[20px] group hover:bg-[#6a6b6e] hover:bg-opacity-[0.07] relative '>
        <img src={arrow} alt=""  className='absolute right-12 top-9 w-[30px]  group-hover:right-7 transition-all duration-300'/>
        <h1 className='text-[#fff] font-Pop font-bold text-[25px] mt-[10px] pr-[50px]'>{title}</h1>
        <h1 className='text-[#6a6b6e] font-Pop  lg:text-[17px] mt-[18px] lg:pr-[100px]'>{content}</h1>
        <h1 className='text-[#6a6b6e] font-Pop  lg:text-[17px] my-[10px] '>{content2}</h1>
    </div>
  )
}

export default SideCard