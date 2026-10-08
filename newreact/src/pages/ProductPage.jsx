import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Addtocart from '../components/Addtocart'

const ProductPage = () => {

    const parameter = useParams()
    const [product, setProduct] = useState()
    console.log(parameter);
    

    const Id = parameter.id

useEffect(() => {
    axios.get(`https://dummyjson.com/products/${Id}`).then(res => setProduct(res.data))
    
}, [parameter])

if(!product) return <Spinner />

  return (
    <div>
      <h1>Title: {product.title}</h1>
      <h3>Description: {product.description}</h3>
      {
       product.images.length > 1? "lots of images": <img src={product.images[0]} alt="" />
      }
      <Addtocart/>
    </div>
  )
}

export default ProductPage
