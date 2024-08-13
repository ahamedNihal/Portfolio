import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Home from '../Pages/Home'
import Skills from '../Pages/Skills'
import Project from '../Pages/Project'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const Routing = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/contact' element={<Contact/>} />

    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default Routing