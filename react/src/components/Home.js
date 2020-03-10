import React from 'react'
import { Container, Card, Jumbotron, Image, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import headerImage from '../assets/action-athlete-barbell-841130.png'
import logo from '../assets/logo-black.svg'
import barbell from '../assets/action-athlete-barbell-841130.png'
import styles from '../App.css'
import pullUp from '../assets/pull-up.png'
import athlete from '../assets/crossfit-athlete.png'
import success1 from '../assets/arthur.png'
import success2 from '../assets/arthur2.png'
import success3 from '../assets/arthur3.png'
import BasicCard from './BasicCard'


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
                <Button block className='uliftCardButton'>More On Our Mission</Button>              </Card.Body>
              <Image style={{ width: '100%' }}src={athlete} />
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <div className='cardHeader'></div>
            <Card className='liftCard'>
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>Job Training Program</Card.Title>
                <Card.Text style={{ fontFamily: 'Roboto' }}>
                  Preparing participants for for holistic wellness. UliftU empowers re-entering citizens to become strong leaders in their own lives and communities.
                </Card.Text>
                <Button block className='uliftCardButton' style={{ borderColor: 'white', backgroundColor: 'black', fontFamily: 'Roboto' }}>View Program</Button>
              </Card.Body>
            </Card>
            <Image style={{ width: '100%' }} src={pullUp} />
          </Col>
        </Row>
        <Row>
          <Col className='sectionHeader' xs={12} sm={6} md={6}>
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
            <Card className='liftCard'>
              <Image style={{ width: '100%' }} src={success1} />
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Inspiring quote about uliftu from participant.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Arthur /<cite title="Source Title"> Program Graduate</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Card className='liftCard'>
              <Image style={{ width: '100%' }} src={success2}/>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Inspiring quote about uliftu from participant.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Rodney /<cite title="Source Title"> Program Participant</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Card className='liftCard'>
              <Image style={{ width: '100%' }} src={success3}/>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}
                    Inspiring quote about uliftu from participant.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Tim /<cite title="Source Title">Program Director</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row >
          <Col>
            <Button block className='uliftCardButton' style={{ borderColor: 'white', backgroundColor: 'black', fontFamily: 'Roboto'}}>More Successes</Button>
          </Col>
        </Row>
        <Row>
          <Col className='sectionHeader' xs={12} sm={8} md={7} lg={5}>
            <div className='cardHeader'></div>
            <Card className='liftCard'>
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>Fitness Classes & Events</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

    </Container>
    </>
  )
}

export default Home
