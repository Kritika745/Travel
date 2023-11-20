import React, {useState,useEffect} from 'react'
import CommonSection from '../Elements/CommonSection'
import '../styles/tour.css';
import Searchbar from "../Elements/Searchbar"
import Newsletter from '../Elements/Newsletter';
import TourCard from '../Elements/TourCard';
import tourData from '../assets/data/tours'
import { Col, Container,Row } from 'reactstrap';


const Tours = () => {

  const[pageCount, setPageCount] = useState(0)
  const[page,setPage] = useState(0)

  useEffect(() =>{


    const pages = Math.ceil(5/4);
    setPageCount(pages)
  },[page])

  return (
    <>
    <CommonSection title={"All Tours"}/>
    <section>
      <Container>
        <Row>
           <Searchbar/>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {
            tourData?.map(tour => (<Col  lg='3' className='mb-4' key={tour.id}><TourCard tour={tour} /></Col>))
          }

          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
            {[...Array(pageCount).keys()].map(number => (
                <span key={number} onClick={() => setPage(number)} className={page === number ? "active__page" : ""}>
                  {number +1}
                </span>
              ))}
            </div>
             
          </Col>
        </Row>
      </Container>
    </section> 

    <Newsletter/>
    </>
  )
}

export default Tours