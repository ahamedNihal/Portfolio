import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import "../App.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Contact = () => {
  return (
    <>
    <Navbar/>
    <section class="contact">
  <div class="contact-header">
    <h3 id="co-title">Contact Me</h3>
    <h1 id="co-text">Reach out for a new project or to say hello</h1>
  </div>
  
  <div class="contact-content">
    <div class="contact-form">
      <h3 id="form-title">Send me a message</h3>
    <form action="mailto:nihalahd6@gmail.com" method="post" enctype="text/plain">
      <fieldset>
        <div class="form-field">
          <input name="name" type="text" id="name" placeholder="Your Name"></input>
        </div>
      <div class="form-field">
          <input name="email" type="email" id="email" placeholder="Your Email"></input>
        </div>
      <div class="form-field">
          <input name="Subject" type="text" id="subject" placeholder="Subject"></input>
        </div>
    <div class="form-field">
          <textarea name="message" type="text" id="message" placeholder="Your Message"></textarea>
        </div>
      </fieldset>
  <input id="form-btn" type="submit" value="send"/>
    </form>
</div>
  
    <div class="contact-info">
      <h3>Email Me At </h3>
      <a href="mailto:nihalahd6@gmail.com"><p>nihalahd6@gmail.com</p></a>
      <h3>Find Me On </h3>
      <div class="contact-links">
        <a href='https://www.linkedin.com/in/nihalahd6'><FaLinkedin /></a>
        <a href='https://github.com/ahamedNihal'><FaGithub/></a>
      </div>
    </div>
    </div>
</section>
    
    
    </>
  )
}

export default Contact