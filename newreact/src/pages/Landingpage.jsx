import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

const Landingpage = ({handledetails, register}) => {
  

  return (
    <div>
      This is my landing page. 

      <Input name="username" placeholder="username" onchange={handledetails}/>
      <Input name="email" placeholder="email" onchange={handledetails}/>
      <Input name="password" placeholder="password" onchange={handledetails}/>
      <Input name="age" placeholder="your age" onchange={handledetails}/>
      <button onClick={register}>Sign Up</button>




    </div>
  )
}

export default Landingpage
