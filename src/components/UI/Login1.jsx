/* eslint-disable max-lines */
// Login1.js
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import loginContext from '../../context/loginContext';
import '../../styles/booking-form.css';
import '../../styles/register.css';

const Login1 = () => {
    const history = useNavigate();
    const { loginData, setLoginData } = useContext(loginContext);
    console.log(loginData);
    const [email, setName] = useState();
    const [password, setPassword] = useState();

    async function submit(e) {
        e.preventDefault();
        try {
            await axios
                .post('http://localhost:8001/login', {
                    email: email,
                    password: password
                })
                .then((res) => {
                    if (res.data === 'exist') {
                        setLoginData({ email: email });
                        history('/home');
                    } else if (res.data === 'notexist') {
                        alert('User have not registered');
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
    async function asubmit(e){
        e.preventDefault();
        try {
          await axios.post("http://localhost:8001/admin",
          {
            email,password
          })
          .then(res=>{
            if(res.data==="exist"){
              setLoginData({ email: email });
              history("/admin")
              
            }
            else if(res.data==="notexist"){
              alert("User have not registered")
            }
          }
          )
          .catch(e=>{alert("wrong details")
          console.log(e);
        })
        } catch(e){
          console.log(e);
        }
      }
    return (
        <MDBContainer fluid>
            <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center abcd">
                            <h1 className="h">Login</h1>

                            <Form>
                                <FormGroup className="booking__form d-inline-block me-4 mb-4">
                                    <Label for="name">Email</Label>
                                    <i class="ri-mail-fill"></i>
                                    <input type="email" name="email" id="email" autocomplete="off" placeholder="Your Email" onChange={(e) => setName(e.target.value)} />
                                </FormGroup>

                                <FormGroup className="booking__form d-inline-block me-1 mb-4">
                                    <Label for="password">Password</Label>
                                    <i class="ri-lock-fill"></i>
                                    <input type="password" name="password" id="password" autocomplete="off" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
                                </FormGroup>

                                <Button type="submit" className="btn lg" onClick={submit}>
                                    Log in
                                </Button>
                                <Button type="submit" className="btn lg" onClick={asubmit}>Admin</Button>
                                <div className="al"><Link to="/register" className="alr">Register</Link>
                                </div>
                            </Form>
                        </MDBCol>
                        <MDBCol md="10" lg="6" className="order-1 order-lg-2  align-items-center">
                            <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" fluid />
                            <div className="al">
                                {/* <Link to="/register" className="alr">
                                    Register
                                </Link> */}
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default Login1;
