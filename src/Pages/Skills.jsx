import React from 'react'
import "../App.css"
import Navbar from '../Component/Navbar/Navbar'
import js from "../Assest/js.webp"
import react from "../Assest/react.webp"
import html from "../Assest/html.webp"
import css from "../Assest/css.webp"
import git from "../Assest/git.webp"



const Skills = () => {
  return (
    <>
    <Navbar/>
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title fadein">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My creative skills & experiences</div>
                    <p>I am a Frontend Developer with a passion for learning and can work with estimation of future tasks and client feedback. Designed and developed customized e-commerce websites for local clients using HTML, CSS, and JavaScript.
                        Managed multiple projects simultaneously, ensuring timely delivery and adherence to deadlines..
                        Improved proficiency in HTML, CSS, and JavaScript through practical application and problem-solving.
                        Received positive feedback and testimonials from satisfied clients, leading to referrals and additional freelance
                        opportunities.
                    </p>
                </div>
                <div class="column right">
                    <div class="info">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                            <img src={js} alt="javascript" width="80" />
                        </a>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <img src={react} alt="react.js" width="80" />
                        </a>
                        <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer">
                            <img src={html} alt="html" width="80" />
                        </a>
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                            <img src={css} alt="css" width="80" />
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                            <img src={git} alt="Git" width="80" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Skills