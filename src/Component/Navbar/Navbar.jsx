import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav class="navbar">
        <div class="black ">
            <div class="black1"> 
                <Link to="/"><h3> <a href="">Home <i class="ri-arrow-drop-down-line"></i></a></h3></Link>
                <Link to="/about"><h3><a href="">About  <i class="ri-arrow-drop-down-line"></i></a></h3></Link>
                <Link to="/skills"><h3> <a href="">Skills <i class="ri-arrow-drop-down-line"></i></a></h3></Link>
                <Link to="/project"><h3> <a href="">Project <i class="ri-arrow-drop-down-line"></i></a></h3></Link>
                <Link to="/contact"> <h3> <a href="">Contact  <i class="ri-arrow-drop-down-line"></i></a></h3> </Link>
            </div>
        </div>
    </nav>


    </>
  )
}

export default Navbar