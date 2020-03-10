import React from 'react'
import { Container, Card, Jumbotron, Image, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import headerImage from '../assets/action-athlete-barbell-841130.png'
import logo from '../assets/logo-black.svg'
import barbell from '../assets/action-athlete-barbell-841130.png'
import styles from '../App.css'


const Home = () => {
  return (
    <>
    <Container fluid style={{ textAlign: 'center', backgroundColor: 'black', paddingLeft: 0}} >
      <Image fluid src={logo} />
      <Row className='justify-content-center' >
        <Col className='mb-2' xs={8} md={6} lg={4} style={{ fontFamily: 'Alfa Slab One', color: 'white' }}>
          UliftU prepares re-entering citizens for meaningful careers in the fitness industry
        </Col>
      </Row>
    </Container>
    <Container className='cardContainer'>
        <Row className='justify-content-center'>
          <Col xs={12} sm={6} md={6}>
            <div className='cardHeader'></div>
            <Card className='liftCard'>
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>Our Mission</Card.Title>
                <Card.Text style={{ fontFamily: 'Roboto' }}>
                  Generate employment opportunities and promote wellness in under-served communities.
                </Card.Text>
                    <Button block className='uliftCardButton'>More On Our Mission</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <div className='cardHeader'></div>
            <Card className='liftCard'>
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>View Program</Card.Title>
                <Card.Text style={{ fontFamily: 'Roboto' }}>
                  Preparing participants for for holistic wellness. UliftU empowers re-entering citizens to become strong leaders in their own lives and communities.
                </Card.Text>
                <Button block className='uliftCardButton' style={{ borderColor: 'white', backgroundColor: 'black', fontFamily: 'Roboto' }}>More On Our Mission</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <div className='cardHeader'></div>
            <Card className='liftCard'>
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>Success Stories</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <div className='cardHeader'></div>
            <Card className='liftCard'>
              <Card.Body>
                <Card.Img></Card.Img>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Inspiring quote about uliftu from participant.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Arthur <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div className='cardHeader'></div>
            <Card className='liftCard'>
              <Card.Body>
                <Card.Img></Card.Img>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Inspiring quote about uliftu from participant.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Rodney <cite title="Source Title">Program Participant</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <div className='cardHeader'></div>
            <Card className='liftCard'>
              <Card.Body>
                <Card.Img></Card.Img>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Inspiring quote about uliftu from participant.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

    </Container>
    </>
  )
}

export default Home
