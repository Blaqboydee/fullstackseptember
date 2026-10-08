import React, {useState} from 'react'
import Users from '../pages/Users'

const Adduser = () => {

    const [username, setUserName] = useState("")
    const [list, setList] = useState([])

    function handleUser () {
    setList([...list, username])
    console.log(list);

    setUserName("")
    
    
    }
 
  return (
    <div>
      <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter a username" />
      <button onClick={handleUser}>Add Users</button>

      <Users user={list}/>
    </div>
  )
}

export default Adduser
