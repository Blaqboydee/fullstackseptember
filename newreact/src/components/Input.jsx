import React from 'react'

const Input = ({placeholder, type, name, onchange}) => {
  return (
    <div>
      <input onChange={onchange} type={type} name={name} id="" placeholder={placeholder} />
    </div>
  )
}

export default Input
