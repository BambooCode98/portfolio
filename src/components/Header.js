import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'

export default function Header() {
  return (
    <>
      
      <div className='header'>
        <p className='name'>James Thomas</p>
        <div className='linkDiv'>
          {/* <a href="#About">About</a> */}
          <Link to="/portfolio/about">About</Link>
          {/* <a href="#About">Projects</a> */}
          <Link to="/portfolio/projects">Projects</Link>
          <a href="Contact">Contact</a>
        </div>
      </div>
    </>
  )
}
