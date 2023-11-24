import { Button, Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import './Solutions.css'
import SolutionsAI from './SolutionsAI'


function Solutions() {
  return (
    <div className='Solutions'>
      <Container>SOLUTIONS
      <h4>Find solutions for putting your ideas into action</h4>
      <Button className='Solbtn'>Featured Solutions</Button>
      <Button className='Solbtn'>AI</Button>
      <Button className='Solbtn'>Cloud Migration</Button>
      <Button className='Solbtn'>Data and analytics</Button>
      <Button className='Solbtn'>App Development</Button>
      </Container>
      
          <SolutionsAI/>
        
    </div>
  )
}

export default Solutions