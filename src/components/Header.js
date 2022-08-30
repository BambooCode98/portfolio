import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
      
      <div className='header'>
        <p className='name'>James Thomas</p>
        <div className='linkDiv'>
          {/* <a href="#About">About</a> */}
          <Link to="/">About</Link>
          {/* <a href="#About">Projects</a> */}
          <Link to="/projects">Projects</Link>
          {/* <a href="Contact">Contact</a> */}
          <Link to="/contact">Contact</Link>

        </div>
      </div>
    </>
  )
}
