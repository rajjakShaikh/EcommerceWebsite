import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "./headingStyle.css";

function Home() {
  return (
    <div>
      <Header />

      <div>
      <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="firstpic.jpg"
          alt="First slide"
          style={{height:"40rem"}}/>
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../images/PADELshoe.webp"
          alt="Second slide"  
          style={{height:"40rem"}}/>
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../images/padelshoe2.jpeg"
          alt="Third slide"
        style={{height:"40rem"}}/>
       
      </Carousel.Item>
    </Carousel>
      </div>

    



   
    <div className="homepageimage" style={{display:"flex",justifyContent:"space-Around",marginTop:"4rem"}}>
          <div> <Card.Img variant="top" src="../images/men.webp" style={{ width: '30rem' }}/> <p style={{fontSize:"20px", textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold" }}>Men</p></div>
        <div><Card.Img variant="top" src="../images/women.webp"style={{ width: '30rem' }} /><p style={{fontSize:"20px", textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold" }}>Women</p></div>
        <div> <Card.Img variant="top" src="../images/kid.webp" style={{ width: '30rem' }}/><p style={{fontSize:"20px", textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold" }}>kids</p></div>

      </div>



      <Footer />
     
      </div>

  );
}

export default Home;
