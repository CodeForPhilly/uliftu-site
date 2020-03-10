import React from 'react'
import {Col, Button, Card, Image } from 'react-bootstrap'

const BasicCard = ({
  cardText,
  cardTitle,
  buttonText,
  image
}) => {
  return (
  <Col xs={12} sm={6} md={6}>
    <div className='cardHeader'></div>
    <Card className='liftCard'>
      <Card.Body>
        <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>Job Training Program</Card.Title>
        <Card.Text style={{ fontFamily: 'Roboto' }}>
          Preparing participants for for holistic wellness. UliftU empowers re-entering citizens to become strong leaders in their own lives and communities.
        </Card.Text>
        <Button block className='uliftCardButton' style={{ borderColor: 'white', backgroundColor: 'black', fontFamily: 'Roboto' }}>{buttonText}</Button>
      </Card.Body>
    </Card>
    <Image style={{ width: '100%' }} src={image} />
  </Col>
  )
}

export default BasicCard
