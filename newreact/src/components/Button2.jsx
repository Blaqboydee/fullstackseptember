import React from 'react'
import "../styles/button.css"

const Button2 = ({text, className, btn}) => {
  return (
    <>
      <button onClick={btn} className={className}>{text}</button>
    </>

      
  )
}

export default Button2
