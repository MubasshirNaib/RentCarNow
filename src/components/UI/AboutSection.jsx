/* eslint-disable max-lines */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png';
import '../../styles/about-section.css';
const AboutSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about__section-content">
                            <h4 className="section__subtitle">About Us</h4>
                            <h2 className="section__title">Welcome to our RentCarNow service</h2>
                            <p className="section__description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt delectus totam repellendus expedita aliquam, illo nisi. Maiores odio aliquid debitis accusamus
                                dolorum alias enim doloremque error, eveniet consequatur atque, deleniti fugiat sapiente ab harum explicabo. Sit magni consequuntur facilis numquam.
                            </p>
                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>

                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>

                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div>
                            <img src={aboutImg} alt="" className="ppp" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;
