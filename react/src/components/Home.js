import React from 'react'
import { Container, Card, Jumbotron, Image, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import headerImage from '../assets/action-athlete-barbell-841130.png'
import logo from '../assets/logo-black.svg'
import barbell from '../assets/action-athlete-barbell-841130.png'

const Home = () => {
  return (
    <>
    <Container fluid style={{ textAlign: 'center', backgroundColor: 'black', }} >
    <Image fluid src={logo} />
      <Row>
        <Col className='sm-6 mb-2' style={{ fontFamily: 'Alfa Slab One', color: 'white' }}>
          UliftU prepares re-entering citizens for meaningful careers in the fitness industry
        </Col>
      </Row>
    </Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={6} md={4}>
            <div style={{ backgroundColor: 'black', backgroundColor: 'green', height: '5px' }}></div>
            <Card style={{ fontFamily: 'Alfa Slab One', color: 'white' }}>
              <Card.Body >
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Generate employment opportunities and promote wellness in under-served communities.
                </Card.Text>
                <Button>More On Our Mission</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card style={{ backgroundColor: 'black', color: 'white' }}>
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Alfa Slab One'}}>View Program</Card.Title>
                <Card.Text style={{ fontFamily: 'Roboto' }}>
                  Preparing participants for for holistic wellness. UliftU empowers re-entering citizens to become strong leaders in their own lives and communities.
                </Card.Text>
                <Button>More On Our Mission</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      <Container className='cardContainer'>
        <Row>
          <p>
            UliftU prepares re-entering citizens for meaningful careers in the fitness industry
          </p>
        </Row>
          <p>
            <Button variant="primary col-8">Learn how</Button>
          </p>
        <h1>Our Mission</h1>
        <p>
          Generate employment opportunties and promote wellness in underserved communities.
        </p>
        <h1>
          Job Training Program
        </h1>
        <p>Preparing participants for for holistic wellness. UliftU empowers re-entering citizens to become strong leaders in their own lives and communities</p>
        <h1>
          Successes
        </h1>
        <p>
          Highlight a few participants here
        </p>
        <h1>
          Fitness Classes & Events
        </h1>
        <p>
          Next Event: Fitnes Class @ Martin Luther King Jr. Recreation Center
        </p>
        <p>
          <Link>View all classes</Link>
        </p>
        <h1>
          Supporters
        </h1>
        <p>
          Generous program support provided by the following organziations:
        </p>
        <ListGroup>
          <ListGroupItem>International Marketing Systems</ListGroupItem>
          <ListGroupItem>Avalanche Granola</ListGroupItem>
          <ListGroupItem>Independence Blue Cross Foundation</ListGroupItem>
          <ListGroupItem>CrossFit Foundation</ListGroupItem>
        </ListGroup>
        <h1>
          Community Partners
        </h1>
        <ListGroup>
          <ListGroupItem>Partner 1</ListGroupItem>
          <ListGroupItem>Organization A</ListGroupItem>
          <ListGroupItem>You! <Link>Become a supporter of UliftU</Link></ListGroupItem>
        </ListGroup>
      </Container>
    </>
  )
}

export default Home
