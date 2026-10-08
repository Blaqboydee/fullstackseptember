import React from 'react'

const Users = ({user}) => {
  return (
    <div>
      {
        user.map((users, i) =>(
            <p key={i}> {users}</p>
        ))
      }
    </div>
  )
}

export default Users
