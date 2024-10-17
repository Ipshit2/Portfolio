import React from 'react'

function SkillsCard({image, name, desc}) {
  return (
    <div className='cursor-pointer lg:flex mt-[20px] p-[20px]  rounded-2xl h-auto font-Pop hover:bg-[#6a6b6e] hover:bg-opacity-[0.07]'>
        <img src={image} alt="" className='bg-[#fff] mx-[10px] lg:mx-0 w-[70px] h-[70px] rounded-2xl p-[10px]'/>
        <div className='lg:px-[20px]  pt-[10px] lg:pt-0'>
            <h1 className='text-[20px] text-[#fff] text-center lg:text-left'>{name}</h1>
            <h1 className='text-[14px] text-center lg:text-left lg:text-[17px] pt-[10px] text-[#6a6b6e]'>{desc}</h1>
        </div>

    </div>
  )
}

export default SkillsCard