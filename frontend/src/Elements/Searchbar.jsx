import React,{useRef} from 'react'
import '../styles/Searchbar.css'
import { Col, Form,FormGroup } from 'reactstrap'

const Searchbar = () => {
 
 const locationRef = useRef('')
 const distanceRef = useRef(0)
 const maxGroupSizeRef = useRef(0)

 const searchHandler = () => {

  const location = locationRef.current.value
  const distance = distanceRef.current.value
  const maxGroupSize = maxGroupSizeRef.current.value
  
  if(location==='' || distance==='' || maxGroupSize===''){
    return alert("All fields are required!");
  }
 }
 
  return (
    <Col lg="12" className='d-flex align-items-center' style={{justifyContent:'center'}}>
        <div className='search__bar '>
            <Form className='d-flex align-items-center gap-4'>
              <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                  <span>
                  <i class="ri-map-pin-line"></i>
                  </span>
                  <div>
                    <h5>Location</h5>
                    <input type="text" placeholder='where are you going?' ref={locationRef}/>
                  </div>
              </FormGroup>
              <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                  <span>
                  <i class="ri-map-pin-time-line"></i>                  </span>
                  <div>
                    <h5>Distance</h5>
                    <input type="number" placeholder='Distance k/m'  ref={distanceRef}/>
                  </div>
              </FormGroup>
              <FormGroup className='d-flex gap-3 form__group form__group-last'>
                  <span>
                  <i class="ri-group-line"></i>                 
                   </span>
                  <div>
                    <h5>Max People</h5>
                    <input type="text" placeholder='0' ref={maxGroupSizeRef}/>
                  </div>
              </FormGroup>

              <span className='search__icon' type="submit" onClick={searchHandler}>
              <i class="ri-search-line"></i>
              </span>
              </Form>
        </div>


    </Col>
  )
}

export default Searchbar
