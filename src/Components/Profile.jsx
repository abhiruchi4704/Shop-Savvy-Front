import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBBtn,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import axios from "axios";

export default function Profile(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    phone: "",
    street: "",
    city: "",
    state:"",
    pincode: "",
  });
  let componentMounted = true;

  useEffect(() => {
    const getUserProfile = async () => {
      setLoading(true);
      const abs = JSON.parse(localStorage.getItem("userId"));
      const response = await fetch(`http://localhost:9090/getprofile/${abs}`);
      console.log(response.data);
      if (componentMounted) {
        setData(await response.clone().json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getUserProfile();
  }, []);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const addingEditedUser = (e) => {
    e.preventDefault(e);
    const abs = JSON.parse(localStorage.getItem("userId"));
    const response = axios
      .post("http://localhost:9090/updateProfile", {
        userID: abs,
        name: data.name,
        email: data.email,
        phone: user.phone,
        address: {
          street: user.street,
          city: user.city,
          state: user.state,
          pincode: user.pincode,
        },
      })
      .then((response) => {
        alert("Profile edited Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    toggleShow();
    window.location.reload();
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://i.ndtvimg.com/i/2017-03/shah-rukh-khan_640x480_61488969837.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{data.name}</p>
                <p className="text-muted mb-4">{data.email}</p>
                <div className="d-flex justify-content-center mb-2">
                  {/* <a data-bs-toggle="modal" data-bs-target="#myModal" className='fas fa-edit'>Edit Profile</a> */}
                  <button outline className="ms-1" onClick={toggleShow}>
                    Edit Profile
                  </button>
                  <MDBModal
                    show={basicModal}
                    setShow={setBasicModal}
                    tabIndex="-1"
                  >
                    <MDBModalDialog>
                      <MDBModalContent>
                        <MDBModalHeader>
                          <MDBModalTitle>Edit Profile</MDBModalTitle>
                          <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={toggleShow}
                          ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                          <div class="offset-2 col-8">
                            <label for="name1" class="form-label">
                              Full Name :
                            </label>
                            <input
                              type="text"
                              id="name1"
                              class="form-control jar"
                              value={data.name}
                            />
                          </div>
                          <div class="offset-2 col-8">
                            <label for="Designation1" class="form-label">
                              Email :
                            </label>
                            <input
                              type="text"
                              id="Designation1"
                              class="form-control jar"
                              value={data.email}
                            />
                          </div>

                          <div class="offset-2 col-8">
                            <label for="Address1" class="form-label">
                              Phone :
                            </label>
                            <input
                              type="text"
                              id="Address1"
                              class="form-control jar"
                              placeholder={data.phone}
                              value={user.phone}
                              onChange={(e) =>
                                setUser({ ...user, phone: e.target.value })
                              }
                            />
                          </div>
                          <div class="offset-2 col-8">
                            <label for="Number1" class="form-label">
                              Street:
                            </label>
                            <input
                              type="text"
                              id="Number1"
                              class="form-control jar"
                              value={user.street}
                              placeholder={data.street}
                              onChange={(e) =>
                                setUser({ ...user, street: e.target.value })
                              }
                            />
                          </div>
                          <div class="offset-2 col-8">
                            <label for="Email1" class="form-label">
                              City :
                            </label>
                            <input
                              type="text"
                              id="Email1"
                              class="form-control jar"
                              value={user.city}
                              placeholder={data.city}
                              onChange={(e) =>
                                setUser({ ...user, city: e.target.value })
                              }
                            />
                          </div>

                          <div class="offset-2 col-8">
                            <label for="Link1" class="form-label">
                              State :
                            </label>
                            <input
                              type="text"
                              id="Link1"
                              class="form-control jar"
                              value={user.state}
                              placeholder={data.state}
                              onChange={(e) =>
                                setUser({ ...user, state: e.target.value })
                              }
                            />
                          </div>
                          <div class="offset-2 col-8">
                            <label for="Language1" class="form-label">
                              Pincode :
                            </label>
                            <input
                              type="text"
                              id="Language1"
                              class="form-control jar"
                              value={user.pincode}
                              placeholder={data.pincode}
                              onChange={(e) =>
                                setUser({ ...user, pincode: e.target.value })
                              }
                            />
                          </div>
                        </MDBModalBody>

                        <MDBModalFooter>
                          <button color="secondary" onClick={toggleShow}>
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={addingEditedUser}
                          >
                            Save changes
                          </button>
                        </MDBModalFooter>
                      </MDBModalContent>
                    </MDBModalDialog>
                  </MDBModal>
                  {/*  */}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {data.name}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {data.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {data.phone}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Street</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {data.street}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {data.city}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                {console.log(data)}
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>State</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {data.state}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Pincode</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {data.pincode}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
