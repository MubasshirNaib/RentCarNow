/* eslint-disable max-lines */
import React from 'react';

import { Col, Container, Row } from 'reactstrap';
import PageTitle from '../components/PageTitle/PageTitle';
import AboutSection from '../components/UI/AboutSection';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import CommonSection from '../components/UI/CommonSection';
import Navbar from '../components/UI/Navbar';
import driveImg from '../assets/all-images/drive.jpg';
import '../styles/about.css';

import { useContext } from 'react';
import loginContext from '../context/loginContext';
// import userContext from '../context/userContext';
import axios from 'axios';
import { useEffect, useState } from 'react';

const About = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(() => {
        axios
            .get('http://localhost:8001/users')
            .then((users) => setUsers(users.data))
            .catch((err) => console.log('error has occured from app.js file'));
    }, []);
    const b = useContext(loginContext);
    // console.log(b.loginData.email);
    let targetEmail = b.loginData.email;
    console.log(targetEmail);
    // const foundUser = users.find((user) => user.email === targetEmail);
    // const {name, email} = foundUser;
    // console.log(name, email);
    // console.log(b);
    return (
        <PageTitle title="About">
            <Navbar/>
            {/* <h1>{targetEmail}</h1> */}
            <CommonSection title="About Us" />
            <AboutSection />
            <section className="about__page-section">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12">
                            <div className="about__page-img">
                                <img src={driveImg} alt="" className="pppp" />
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="12">
                            <div className="about__page-content">
                                <h2 className="section__title">We Are Committed To Provide Safe Ride Solutions</h2>

                                <p className="section__description">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et
                                    dolore est tempore rem minima adipisci magni dolorum ipsam.
                                </p>

                                <p className="section__description">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et
                                    dolore est tempore rem minima adipisci magni dolorum ipsam.
                                </p>

                                <div className=" d-flex align-items-center gap-3 mt-4">
                                    <span className="fs-4">
                                        <i class="ri-phone-line"></i>
                                    </span>

                                    <div>
                                        <h6 className="section__subtitle">Need Any Help?</h6>
                                        <h4>+00123456789</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <BecomeDriverSection />
        </PageTitle>
    );
};

export default About;
