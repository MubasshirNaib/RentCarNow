import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import carData from '../assets/data/carData';
import PageTitle from '../components/PageTitle/PageTitle';
import CarItem from '../components/UI/CarItem';
import Navbar from '../components/UI/Navbar';
import { Link,useLocation} from 'react-router-dom';

const CarListing = () => {
    return (
        <PageTitle title="Cars">
            <Navbar/>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {/* <div className=" d-flex align-items-center gap-3 mb-5">
                                <span className=" d-flex align-items-center gap-2">
                                    <i class="ri-sort-asc"></i> Sort By
                                </span>

                                <select>
                                    <option>Select</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>
                            </div> */}
                        </Col>

                        {carData.slice(0, 9).map((item) => (
                            <CarItem item={item} key={item.id} />
                        ))}
                    </Row>
                </Container>
            </section>
        </PageTitle>
    );
};

export default CarListing;
