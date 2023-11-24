import React from 'react'
import './ProductsAndServices.css'
import './Solutions.css'
import { Button } from 'react-bootstrap'
import ProductsAndServicesCard from './ProductsAndServicesCard'

function ProductsAndServices() {
  return (
    <div className='ProductsAndServices' >
    <div className='ProductContent'>
      PRODUCTS AND SERVICES
      <h2>Explore tools for bringing your vision to life</h2>
      <Button className='Solbtn'>Solutions</Button>
      <Button className='Solbtn'>AI + machine learning</Button>
      <Button className='Solbtn'>Compute</Button>
      <Button className='Solbtn'>Containers</Button>
      <Button className='Solbtn'>Hybrid + multicloud</Button>
      <Button className='Solbtn'>IoT</Button>
      <ProductsAndServicesCard/>
    </div>
    </div>
  )
}

export default ProductsAndServices