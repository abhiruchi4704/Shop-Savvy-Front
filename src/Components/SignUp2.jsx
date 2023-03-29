import React from 'react';
import { useState } from 'react';
import SignUpService from './SignUpService';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
}
from 'mdb-react-ui-kit';

function SignUp2(props) {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    const saveUSer = (e) => {
        e.preventDefault(e);
        SignUpService.saveUser(user)
          .then((response) => {
            alert("Sign Up Successfully");
            props.history.push("/login")
          })
          .catch((error) => {
            alert(error)
          });
      };
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={user.name} onChange={e =>setUser({...user, name:e.target.value})}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBInput label='Your Email' id='form2' type='email' value={user.email} onChange={e => setUser({...user, email:e.target.value})}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBInput label='Password' id='form3' type='password' value={user.password} onChange={e => setUser({...user, password:e.target.value})}/>
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={saveUSer}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp2;