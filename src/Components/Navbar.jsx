import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [userId, setUserId] = useState(null);
  useEffect(()=>{
    setUserId(JSON.parse(localStorage.getItem("userId")));
  },[])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            SHOP SAVVY
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink> */}
              {/* </li> */}
            </ul>
            <div className="buttons">
               {userId===null ?<NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login</NavLink>:null}
  
                {userId===null ?<NavLink to="/signup" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register</NavLink>: null}
                {userId===null ? null:
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart(0)</NavLink>}
                {userId===null ? null: <button className="btn btn-outline-dark ms-2" onClick={() => setModalShow(true)} variant="primary">
                <i className="fa fa-sign-out me-1"></i>Logout</button>}
                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                {userId===null ? null:<NavLink to="/profile" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user me-1"></i> Profile</NavLink>}
                
                {userId===111?<NavLink to="/addProduct" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user me-1"></i> Add Product</NavLink>:null}
            </div>
          </div>
        </div>
      </nav>
      </div>
    
  );
};
function MyVerticallyCenteredModal(props) {
  function loggingOut(){
    localStorage.clear();
    props.onHide();
    window.open("/","_self");
    window.location.reload(false);
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Logout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Message</h4>
        <p>
         Do you really want to logout?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={loggingOut}>Yes</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Navbar;
