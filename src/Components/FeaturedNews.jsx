import React from 'react'
import FeaturedNewsCard from './FeaturedNewsCard'

function FeaturedNews() {
  return (
    <div style={{padding:"50px"}}>
      <p style={{fontSize:"15px"}}>FEATURED NEWS</p>
      <h3>Discover what’s happening on Azure</h3>
      <FeaturedNewsCard/>
    </div>
  )
}

export default FeaturedNews