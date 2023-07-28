/* eslint-disable max-lines */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import carData from '../assets/data/carData';
import PageTitle from '../components/PageTitle/PageTitle';
import AboutSection from '../components/UI/AboutSection';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import CarItem from '../components/UI/CarItem';
import HeroSlider from '../components/UI/HeroSlider';
import ServicesList from '../components/UI/ServicesList';
import Navbar from '../components/UI/Navbar';

const Home = () => {
    return (
        <PageTitle title="Home">
            <Navbar/>
            {/*hero section*/}
            <section className="p-0 hero__slider-section">
                <HeroSlider />
            </section>
            {/*About section*/}

            <AboutSection />
            {/*Service section*/}

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
                            <h6 className="section__subtitle">See our</h6>
                            <h2 className="section__title">Popular Services</h2>
                        </Col>

                        <ServicesList />
                    </Row>
                </Container>
            </section>
            {/* Car offer section*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h6 className="section__subtitle">Come with</h6>
                            <h2 className="section__title">Hot Offers</h2>
                        </Col>

                        {carData.slice(0, 6).map((item) => (
                            <CarItem item={item} key={item.id} />
                        ))}
                    </Row>
                </Container>
            </section>
            {/* driver section*/}
            <BecomeDriverSection />
        </PageTitle>
    );
};

export default Home;
