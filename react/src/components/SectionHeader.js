import React from 'react'
import { Col, Card } from 'react-bootstrap'

const SectionHeader = ({
  headerTitle
}) => {
  return (
  <Col className='sectionHeader' xs={12} sm={8} md={7} lg={5}>
    <div className='cardHeader'></div>
    <Card className='liftCard'>
      <Card.Body>
        <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>{headerTitle}</Card.Title>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default SectionHeader
