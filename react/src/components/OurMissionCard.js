import React from 'react'
import styles from '../App.css'
import { Col, Card, Button, Image } from 'react-bootstrap'

const OurMissionCard = ({ image, header, text, buttonText }) => {
  return (
  <Col xs={12} sm={6} md={6}>
    <div className='cardHeader'></div>
    <Card className='liftCard'>
      <Card.Body>
        <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>{header}</Card.Title>
        <Card.Text style={{ fontFamily: 'Roboto' }}>
          {text}
        </Card.Text>
        <Button block className='uliftCardButton'>{buttonText}</Button>              </Card.Body>
      <Image style={{ width: '100%' }}src={image} />
    </Card>
  </Col>
  )
}

export default OurMissionCard
