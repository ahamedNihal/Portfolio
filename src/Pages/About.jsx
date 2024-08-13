import React from 'react'
import "../App.css"
import profile from "../Assest/profile.jpg"
import Navbar from '../Component/Navbar/Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title fadein">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src={profile} alt="Nihal Ahamed"/>
                    <div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">I'm a Nihal Ahamed  and <span class="break">I'm a Front End Developer 
                        </span>
                    </div>
                    <p>I am a dedicated front-end developer focused on creating attractive and user-friendly websites. I am passionate about translating design concepts into interactive digital experiences and continuously improving my skill set to stay updated with the latest industry trends. My portfolio showcases a variety of projects that demonstrate my ability to deliver responsive and dynamic web applications.</p>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About