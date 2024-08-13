import React from 'react'
import "../App.css"
import Navbar from '../Component/Navbar/Navbar'
import pro1 from '../Assest/pro1.png'
import pro2 from '../Assest/pro2.png'


const Project = () => {
  return (
    <>
    <Navbar/>
     <section class="projects" id="projects">
        <div class="max-width">
            <h2 class="title fadein">My Projects</h2>
            <div class="carousel owl-carousel">
                <div class="card">
                    <a href="https://nihalahamed.vercel.app/index.html" target="_blank" rel="noreferrer" title="E-commerce Website">
                        <div class="box">
                            <img src={pro1} alt="minimilan"/>

                        </div>
                    </a>
                    <a href="https://nihalahamed.vercel.app/index.html" target="_blank" rel="noreferrer" title="Bank">
                        <p> Shopping Page </p>
                    </a>

                    <p>Html , Css </p>

                </div>
                <div class="card">
                    <a href="" target="_blank" rel="noreferrer" title="Bank Dashboard Panel">
                        <div class="box">
                            <img src={pro2} alt="Bank Dashboard Panel"/>

                        </div>
                    </a>
                    <a href="" target="_blank" rel="noreferrer" title="Bank Dashboard Panel ">
                        <p>Bank Dashboard Panel</p>
                    </a>

                    <p> Html ,Css , Javscript </p>
                </div>
                <div class="card">
                    <a href="" target="_blank" rel="noreferrer" title="Spotify App">
                        <div class="box">
                            <img src="https://imgs.search.brave.com/9rPZ505YwjDmq4OilkqaH9mPX-jH5h6u4S_PVPkqXno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3Nwb3RpZnkt/bG9nby1wbmctb3Bl/bi0yMDAwLnBuZw" alt="Spotify App"/>

                        </div>
                    </a>
                    <a href="" target="_blank" rel="noreferrer" title="Spotify App">
                        <p>Spotify App</p>
                    </a>

                    <p>React.js, Html , CSS , Javascript </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Project