/* eslint-disable max-lines */
import React from 'react';

import { NavLink} from 'react-router-dom';
import { Col } from 'reactstrap';
import '../../styles/car-item.css';
const CarItem = (props) => {
    const { imgUrl, model, carName, automatic, speed, price } = props.item;


    return (
        <Col lg="4" md="4" sm="6" className="mb-5">
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt="" className="w-100 car_height" />
                </div>

                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center mt-">
                        {price}.00tk <span>/ Day</span>
                    </h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className=" d-flex align-items-center gap-1">
                            <i class="ri-car-line"></i> {model}
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                            <i class="ri-settings-2-line"></i> {automatic}
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                            <i class="ri-timer-flash-line"></i> {speed}
                        </span>
                    </div>

                    <div className='d-flex justify-content-center gap-3'>
                        <NavLink className="w-50 px-5 py-2 car__item-btn car__btn-rent text-white text-center" to={`/cars/${carName}`}>
                            Rent
                        </NavLink>
                        <NavLink className="w-50 px-5 py-2 car__item-btn car__btn-details text-white text-center" to={`/cars/${carName}`}>
                            Details
                        </NavLink>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default CarItem;
