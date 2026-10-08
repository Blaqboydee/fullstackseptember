import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/dashboard.css"

const Sidebar = ({user}) => {
  return (
    <div className='sidebar'>
      <div className='links'>
     <Link to="home" className='link'>Home</Link>
      <Link to="activities" className='link'>Activities</Link>
      <Link to="users" className='link'>Users</Link>

      {/* <Link className='link'>Classes</Link>
      <Link className='link'>Profile</Link>
      <Link className='link'>Settings</Link>
      <Link className='link'>Log out</Link>
      <Link className='link'>About</Link> */}
      </div>
 


      <div>
        <p>{user.username}</p>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Sidebar
