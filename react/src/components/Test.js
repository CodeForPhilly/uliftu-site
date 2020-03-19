import React from 'react'
import { Container, Card, Jumbotron, Image, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import LogoHeader from './LogoHeader'
import BasicCard from './BasicCard'
import QuoteCard from './QuoteCard'
import SectionHeader from './SectionHeader'
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

const Home = () => {
  return (
    <>
    <LogoHeader />
    <Container className='cardContainer'>
        <Row>
          <BasicCard
            image={athlete}
            header={'Our Mission'}
            text={'Generate employment opportunities and promote wellness in under-served communities.'}
            buttonText={'More On Our Mission'}
            />
          <BasicCard
            image={pullUp}
            header={'Job Training Program'}
            text={'Preparing participants for for holistic wellness. UliftU empowers re-entering citizens to become strong leaders in their own lives and communities.'}
            buttonText={'View Program'}
            />
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
          <QuoteCard
          image={success1}
          quoteText={'inspiring quote from a uliftu participant here'}
          quoteSource={'Arthur'}
          quoteSourceDescription={'Program Graduate'}
          />
             <QuoteCard
          image={success2}
          quoteText={'inspiring quote from a uliftu participant here'}
          quoteSource={'Rodney'}
          quoteSourceDescription={'Program Participant'}
          />
             <QuoteCard
          image={success3}
          quoteText={'inspiring quote from a uliftu participant here'}
          quoteSource={'Tim'}
          quoteSourceDescription={'Program Director'}
          />
        </Row>
        <Row >
          <Col className='text-center' sm>
            <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <Button className='btn-lg uliftCardButton' style={{ borderColor: 'white', backgroundColor: 'black', fontFamily: 'Roboto'}}>More Successes</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <SectionHeader
            headerTitle={'Fitness Classes & Events'}
            />
        </Row>

    </Container>
    </>
  )
}

export default Home
