import React from 'react'
import SkillsCard from '../components/SkillsCard'

function Skills() {
  return (
    <div className='my-[20px] h-auto mx-[20px]' id='skills'>
        <h1 className='font-bold text-center lg:text-left text-[40px] lg:text-[100px] text-[#2D5E66] leading-tight font-Pop pt-[20px] mt-[150px]'>SKILLS</h1>
        <h1 className='text-[#2D5E66] text-center lg:text-left font-Pop font-bold text-[25px] mt-[10px]'>Technical Skills</h1>
        <div className='grid grid-cols-2 '>
            <SkillsCard
            image="https://img.icons8.com/officexs/480/react.png"
            name="React"
            desc="Frontend Library"/>
            <SkillsCard
            image="https://img.icons8.com/color/48/tailwindcss.png"
            name="Tailwind"
            desc="CSS Framework"/>
            <SkillsCard
            image="https://img.icons8.com/color/48/express-js.png"
            name="Expressjs"
            desc="Backend Framework"/>
            <SkillsCard
            image="https://img.icons8.com/fluency/48/node-js.png"
            name="Nodejs"
            desc="Runtime Environment"/>
            <SkillsCard
            image="https://img.icons8.com/color/48/mongo-db.png"
            name="Mongodb"
            desc="NoSQL Database"/>
            <SkillsCard
            image="https://img.icons8.com/color/48/postgreesql.png"
            name="Postgresql"
            desc="SQL Database"/>
            <SkillsCard
            image="https://img.icons8.com/color/48/git.png"
            name="Git/Github"
            desc="Version control tool"/>
            <SkillsCard
            image="https://img.icons8.com/color/48/canva.png"
            name="Canva"
            desc="Design platform"/>

        </div>
    </div>
  )
}

export default Skills


