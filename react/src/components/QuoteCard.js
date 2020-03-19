import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'

const QuoteCard = ({
  quoteText,
  quoteSource,
  quoteSourceDescription,
  image
}) => {
  return (
    <Col xs={12} sm={12} md={4}>
      <Card className='liftCard'>
        <Image style={{ width: '100%' }} src={image} />
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              {quoteText}{' '}
            </p>
            <footer className="blockquote-footer">
              {quoteSource} /<cite title="Source Title"> {quoteSourceDescription}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default QuoteCard
