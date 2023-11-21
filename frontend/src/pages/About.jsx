import React from 'react'
import CommonSection from '../Elements/CommonSection'
import { Col, Container,Row } from 'reactstrap';
import '../styles/about.css'

const About = () => {
  return (
    <>
    <CommonSection title={"About Us"}/>
    <section>
      <Container>
        <Row>
           <h2 className='head'>Our History</h2>
           <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque expedita sequi dolorem illum inventore adipisci recusandae iusto cum qui! Officiis assumenda accusantium quos, soluta id placeat, ad animi commodi sit neque odit rerum. Sequi maxime laudantium quam ipsa dolor a veritatis autem, perferendis quo natus, nisi, ipsum voluptatum quasi.

           </p>

           <h2 className='head'>Our Mission</h2>
            <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam error quibusdam minima incidunt at, ad assumenda eligendi suscipit accusantium vero.</p>
           <h2 className='head'>Our Vision</h2>
           <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quia.</p>

        </Row>
      </Container>
    </section>
    </>
    )
}

export default About