import React from 'react'
import "../App.css"
import { TbHandClick } from "react-icons/tb";
import Navbar from '../Component/Navbar/Navbar';
import { Link } from 'react-router-dom'



const Home = () => {


  
  return (
    <>
    <Navbar/>
    <section className="home" id="home">
        <div className="max-width">
            <div class="home-content">
                <div className="text-1">Hello 👋 I'm</div>
                <div className="text-2">Nihal Ahamed </div>
                <div className="text-3">And I'm a <span>Front End Developer </span>
                </div>
                <a className="web" href='mailto:nihalahd6@gmail.com'> I need a website <TbHandClick />  </a> 
                <a href="https://www.linkedin.com/in/nihalahd6" target="_blank" rel="noreferrer">I'm looking to hire <TbHandClick /> </a>
            </div>
        </div>
    </section>


    </>
  )
}

export default Home