import React from 'react'
import "../styles/Home.css";
import video from '../assets/images/homevid1.mp4' 

import Searchbar from "./Searchbar"

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
   </>   
  )
}

export default Home