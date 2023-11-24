import React from 'react'
import FeaturedNewsCard from './FeaturedNewsCard'
import './FeaturedNews.css'

function FeaturedNews() {
  return (
    <div className='FNews'>
      <p className='PFNews'>FEATURED NEWS</p>
      <h3>Discover what’s happening on Azure</h3>
      <FeaturedNewsCard/>
    </div>
  )
}

export default FeaturedNews