import React from 'react'
import "../styles/Home.css";
import video from '../assets/images/homevid1.mp4' 

import Searchbar from "../Elements/Searchbar"
import {Container,Row,Col} from 'reactstrap'

import ServiceList from '../Elements/ServiceList';
import FeaturedTours from '../Elements/FeaturedTours';
import experienceImg from '../assets/images/experience.png'

import MansonryImagesGallery from '../Elements/MansonryImagesGallery';
import Testimonials from '../Elements/Testimonials';
import Newsletter from '../Elements/Newsletter';


const Home = () => {
  return (
    <>
    <div className='background '>
      <video className=' homevid' src={video} autoPlay loop muted></video>
    </div>
    <div className='search d-flex row '>
      <h1>EXPLORE </h1>
      <h2>THE WORLD</h2>
    <Searchbar />
    </div> 

    <section>
      <Container>
        <Row>
           <Col lg='3'>
            <h5 className='services__subtitle'>What We Serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
             <h2></h2>
           </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2 className="featured__tour-title">Our Featured Tours</h2>

          </Col>
          <FeaturedTours/>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6' className='experience'>
            <div className="experience__content">
              <h2>With our all experience <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Magnam laboriosam odit iusto minus reprehenderit adipisci?
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trips</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>20</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
    
    <section >
      <Container>
        <Row>
          <Col lg='12'>
            <h2 className='gallery__title'>Visit our customers tour gallery</h2>
          </Col>
          <Col lg="12">
          <MansonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    
    <section>
       <Container>
          <Row>
            <Col lg='12'>
              <h2 className="testimonial__title">
                What our clients say about us
              </h2>
              <Col lg='12' className='testimonial'>
                <Testimonials/>
              </Col>

            </Col>
          </Row>
       </Container>
    </section>

    <Newsletter/>
   </>   
  )
}

export default Home