import React from 'react'
import { Col, Card, Button, Image } from 'react-bootstrap'
// import styles from '../App.css'

const styles = {
  cardStyle: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 0
  },
  img: {
    objectFit: 'cover',
    width: '100%'
  },
  text: {
    minHeight: '6rem',
    fontFamily: 'Roboto'
  },
  header: {
    fontFamily: 'Alfa Slab One'
  }
}

const BasicCard = ({ image, header, text, buttonText }) => {
  return (
  <Col fluid sm >
    <div className='cardDivider'></div>
    <Card style={styles.cardStyle}>
      <Card.Body>
        <Card.Title style={styles.header}>{header}</Card.Title>
        <Card.Text style={styles.text}>
          {text}
        </Card.Text>
        <Button block className='uliftCardButton'>{buttonText}</Button>              </Card.Body>
      <Card.Img style={styles.img} src={image} />
    </Card>
  </Col>
  )
}

export default BasicCard
