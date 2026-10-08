import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import "../styles/dashboard.css"

const Dashboard = ({user}) => {
  console.log(user);
  
  return (
    <div className='dashboard'>
      {/* <h1>Hello {user.username}, welcome to your dashboard</h1> */}
      <Sidebar user={user}/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
