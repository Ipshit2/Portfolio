import React from 'react'
import SideCard from '../components/SideCard'
function Project() {
  return (
    <div className='my-[20px] h-auto mx-[10px] lg:mx-[20px]' id='project'>
        <h1 className='font-bold text-center lg:text-left text-[40px] lg:text-[100px] text-[#ffff] leading-tight font-Pop pt-[20px] mt-[150px]'>PROJECTS</h1>
        
            <a href="https://github.com/Ipshit2/Pet-Adoption-System">
                <SideCard
                title = "Pet E-commerce Application"
                content= "Project streamlines the pet adoption process through a user-friendly interface. It features both frontend and backend components, allowing users to easily browse and manage pet listings. Built with JavaScript, the system emphasizes efficiency and accessibility, enhancing the overall adoption experience. "
                content2= "Tech Stack Used – MERN"/>
            </a>
            <a href="https://github.com/Ipshit2/Bookstore">
            <SideCard
                title = "Bookstore Application"
                content= "Contains features for adding, editing, and removing book records. Users can manage bookshop inventory in a thorough and interactive way by adding new books to the database, updating existing book details, and removing books as needed."
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