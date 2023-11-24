import React from 'react'
import './FooterMenu.css'
import { Col, Container, Row } from 'react-bootstrap'

function FooterMenu() {
  return (
    <div className='Fmenu'>
      
        <Row>
          <Col><b>Explore Azure</b></Col>
          <Col><b>Products and pricing</b></Col>
          <Col><b>Solutions and support</b></Col>
          <Col><b>Partners</b></Col>
          <Col><b>Resources</b></Col>
          <Col><b>Cloud computing</b></Col>
        </Row>
        <Row>
          <Col>What is Azure?</Col>
          <Col>Products</Col>
          <Col>Solutions</Col>
          <Col>Azure Marketplace</Col>
          <Col>Training and certifications</Col>
          <Col>What is cloud computing?</Col>
        </Row>
        <Row>
          <Col>Get started</Col>
          <Col>Pricing</Col>
          <Col>Resources for accelerating growth</Col>
          <Col>Find a partner</Col>
          <Col>Documentation</Col>
          <Col>What is cloud migration?</Col>
        </Row>
        <Row>
          <Col>Global infrastructure</Col>
          <Col>Free Azure services</Col>
          <Col>Solution architectures</Col>
          <Col>Technology partners</Col>
          <Col>Blog</Col>
          <Col>What is a hybrid cloud?</Col>
        </Row>
        <Row>
          <Col>Datacenter regions</Col>
          <Col>Flexible purchase options</Col>
          <Col>Support</Col>
          <Col></Col>
          <Col>Developer resources</Col>
          <Col>What is AI?</Col>
        </Row>
        <Row>
          <Col>Trust your cloud</Col>
          <Col>Cloud economics</Col>
          <Col>Azure demo and live Q&A</Col>
          <Col></Col>
          <Col>Students</Col>
          <Col>What is IaaS?</Col>
        </Row>
        <Row>
          <Col>Customer enablement</Col>
          <Col>Optimize your costs</Col>
          <Col></Col>
          <Col></Col>
          <Col>Events and webinars</Col>
          <Col>What is SaaS?</Col>
        </Row>
        <Row>
          <Col>Customer stories</Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>Analyst reports, white papers, and e-books</Col>
          <Col>What is PaaS?</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>Videos</Col>
          <Col>What is DevOps?</Col>
        </Row>

    </div>
  )
}

export default FooterMenu