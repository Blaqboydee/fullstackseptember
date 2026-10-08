import React from 'react'
import "../styles/navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      This is navbar


      <NavLink to='/dashboard/home' className={({isActive}) => isActive? "active" : "" }>Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="news">News</NavLink>
    
    </div>
  )
}

export default Navbar
