import React from 'react'
import SideCard from '../components/SideCard'
function Project() {
  return (
    <div className='my-[20px] h-auto mx-[10px] lg:mx-[20px]' id='project'>
        <h1 className='font-bold text-center lg:text-left text-[40px] lg:text-[100px] text-[#5c618b] leading-tight font-Pop pt-[20px] mt-[150px]'>PROJECTS</h1>
        
            <a href="https://github.com/Ipshit2/BookBear">
                <SideCard
                title = "Book Tracking and Management Application"
                content= "Developed a web application for managing and tracking book collections. It integrates the Google Books APIto enable book searches and fetch detailed information such as authors and descriptions.The app includes user authentication, responsive design, and seamless book organization, showcasingexpertise in API integration and user-friendly development. "
                content2= "Tech Stack Used – PERN"/>
            </a>
            <a href="https://github.com/Ipshit2/Custom-foods">
            <SideCard
                title = "Customizable Food Ordering Application"
                content= "Developed a full-stack customizable food ordering web application using the MERN stack. ImplementedJWT authentication, RESTful APIs, and a responsive React frontend for seamless user experience. Enabled dynamic menu browsing, order customization, cart management, and secure checkout, showcasingstrong skills in full-stack development and API integration."
                content2= "Tech Stack Used – MERN"/>
            </a>
            <a href="https://github.com/Ipshit2/Poke-dex">
                <SideCard
                title = "Pokemon API Application"
                content= "Developed a Pokedex app using the Pokémon API with a React and Tailwind CSS interface. Implemented pagination for smooth navigation, displaying key Pokémon details like ID, name, types, and images. Optimized API handling and ensured responsive design for a seamless user experience."
                content2= "Technologies Used – React"/>
            </a>
    </div>
  )
}

export default Project