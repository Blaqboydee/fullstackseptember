import axios from 'axios'
import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Usersdummy() {
    const parameter = useParams();

    console.log(parameter);
    const theId = parameter.id

    console.log(theId);
    
    

   useEffect(() => {
    axios.get(`https://dummyjson.com/users/${theId}`).then(res => console.log(res.data))
   }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Usersdummy
