import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa";

function Navbar() {

    const [isOpen,setisOpen]=useState(false);

    const toggleMenu = () =>{
        setisOpen(!isOpen)
    };
  return (
    <>
    <header>
   <div className='container'>
    <div className="logo">
        <h2>Design</h2>
    </div>

  
    <ul className={isOpen ? "nav-link active":"nav-link"}>
        <li><a href="/About Me" className='active' >About Me</a></li>
        <li onClick={()=> scrollHandler(Experience)}><a href="/Experience">Experience</a></li>
        <li><a href="/Recommended">Recommended</a></li>
    </ul>
   

    <div className="icon" >
    <FaBars />
    </div>
   </div>
   </header>
   <section>
    <div className="container">
        <div className="content">
           
        </div>
    </div>
   </section>
   </>
  )
}

export default Navbar
