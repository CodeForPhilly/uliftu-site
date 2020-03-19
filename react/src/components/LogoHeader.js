import React from 'react'
import { Container, Card, Jumbotron, Image, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import headerImage from '../assets/action-athlete-barbell-841130.png'
import logo from '../assets/logo-black.svg'


const LogoHeader = () => {
  return (
    <Container fluid style={{ textAlign: 'center', backgroundColor: 'black', paddingLeft: 0 }} >
      <Row>
        <Col>
          <Image fluid src={logo} />
        </Col>
      </Row>
      <Row className='mt-2 justify-content-center'>
        <Col className='mb-2' xs={8} md={6} lg={4} style={{ fontFamily: 'Alfa Slab One', color: 'white' }}>
          UliftU prepares re-entering citizens for meaningful careers in the fitness industry
        </Col>
      </Row>
    </Container>
  )
}

export default LogoHeader
