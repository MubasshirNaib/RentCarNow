/* eslint-disable max-lines */
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import '../../styles/booking-form.css';
import '../../styles/register.css';

const Register1 = () => {
    const history = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    // const[cpassword,setCpassword]= useState()

    async function submit(e) {
        e.preventDefault();
        try {
            await axios
                .post('http://localhost:8001/register', { name, email, phone, password })
                .then((res) => {
                    if (res.data === 'exist') {
                        alert('User already exists');
                    } else if (res.data === 'notexist') {
                        alert('Succesfully registered');
                        history('/login');
                    }
                })
                .catch((e) => {
                    alert('wrong details');
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <MDBContainer fluid>
            <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center abcd">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration</p>

                            <Form>
                                <FormGroup className="booking__form me-4 mb-4">
                                    <Label for="name">Name</Label>
                                    <i class="ri-user-6-fill"></i>
                                    <input type="text" required name="name" id="name" autocomplete="off" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                                </FormGroup>

                                <FormGroup className="booking__form  me-1 mb-4">
                                    <Label for="email">Email</Label>
                                    <i class="ri-mail-fill"></i>
                                    <input type="email" required name="email" id="email" autocomplete="off" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                </FormGroup>

                                <FormGroup className="booking__form  me-4 mb-4">
                                    <Label for="phone">Phone</Label>
                                    <i class="ri-phone-line"></i>
                                    <input type="text" required name="phone" id="phone" autocomplete="off" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="booking__form d-inline-block me-1 mb-4">
                                    <Label for="password">Password</Label>
                                    <i class="ri-lock-fill"></i>
                                    <input type="password" required name="password" id="password" autocomplete="off" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
                                </FormGroup>
                                {/* <FormGroup className="booking__form d-inline-block  me-1 mb-4 aa">
                    <Label for="cpassword">Confirm Password</Label>
                    <i class="ri-lock-fill"></i>
                    <input type="password" name="cpassword" id="cpassword" autocomplete="off" placeholder="Your Password"
                    onChange={(e) => setCpassword(e.target.value)}
                    />
                </FormGroup> */}

                                <Button type="submit" onClick={submit} className="btn reserve__btn mt-4 bg-secondary text-white bn ">
                                    Registration
                                </Button>
                            </Form>
                        </MDBCol>
                        <MDBCol md="10" lg="6" className="order-1 order-lg-2  align-items-center">
                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid />
                            <div className="al">
                                {/* <Link to="/login" className="alr">
                                    I am already registered
                                </Link> */}
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default Register1;
