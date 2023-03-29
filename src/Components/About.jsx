import React from 'react'
import img from '../images/draw2.avif'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
  }
  from 'mdb-react-ui-kit';

function About() {
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">About US</p>
              <p classNAme="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome to Shop Savvy! We are a team of passionate individuals who believe that shopping should be a fun, convenient, and personalized experience. We offer a wide range of products, from fashion and electronics to home decor and beauty, all carefully curated to meet your needs and preferences. Our user-friendly interface, secure payment methods, and reliable delivery services ensure that you can shop with confidence and ease. We are committed to providing exceptional customer service and building long-lasting relationships with our valued customers. Thank you for choosing Shop Savvy as your go-to destination for all your shopping needs.</p>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src={img} fluid/>
            </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  )
}

export default About
