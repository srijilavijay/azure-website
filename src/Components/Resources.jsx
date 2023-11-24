import React from 'react'
import './Resources.css'
import './FeaturedNewsCard.css'
import { Button } from 'react-bootstrap'

function Resources() {
  return (
    <div className='Resources'>
      <div className="ResourcesContent">
       RESOURCES BY ROLE
    <h2>Transform the way you work</h2>
    <p>Optimize your infrastructure with popular Azure solutions and services.</p>
      
    <Button className="Cbtn">&rarr;</Button>Get started with Azure
    <br />
    <img className='ResourcesItProfessional' src="./resources-it-professional-2x1.avif" alt="" />
    </div>
    </div>
  )
}

export default Resources
