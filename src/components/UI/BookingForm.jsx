/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../../styles/booking-form.css';

import axios from 'axios';
import { useContext } from 'react';
import loginContext from '../../context/loginContext';
import {useNavigate } from 'react-router-dom';
const BookingForm = (props) => {
    const history = useNavigate();
    const b = useContext(loginContext);
    console.log(props.carName);

    const [name, setName] = useState(props.carName);
    const [email, setEmail] = useState(b.loginData.email);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [journeyDate, setJourneyDate] = useState('');
    const [journeyTime, setJourneyTime] = useState('');
    const [trans, setTrans] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await axios
                .post('http://localhost:8001/cars', {
                    name,
                    email,
                    phoneNumber,
                    fromAddress,
                    toAddress,
                    journeyDate,
                    journeyTime,
                    trans
                })
                .then((res) => {
                    if (res.data === 'exist') {
                        alert('Thanks For Your Booking');
                        history('/cars');
                    } else if (res.data === 'naib') {
                        alert('This Car is already booked !!');
                    }
                })
                .catch((e) => {
                    alert('wrong details');
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="container">
            <div className="row">
                <div className="col">
                    <FormGroup className="booking__form d-inline-block me-4 mb-4">
                        <Label for="name">Car</Label>
                        <Input type="text" placeholder="" name="name" id="name" value={props.carName} onChange={(e) => setName(e.target.value) } required/>
                    </FormGroup>
                </div>
                <div className="col">
                    <FormGroup className="booking__form d-inline-block me-4 mb-4">
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            id="email"
                            required
                            value={b.loginData.email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <FormGroup className="booking__form d-inline-block me-1 mb-4">
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input type="number" name="phoneNumber" placeholder="Enter phone number" id="phoneNumber" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </FormGroup>
                </div>
                <div className="col">
                    <FormGroup className="booking__form d-inline-block me-4 mb-4">
                        <Label for="fromAddress">From Address</Label>
                        <Input type="text" required name="fromAddress" id="fromAddress" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <FormGroup className="booking__form d-inline-block me-1 mb-4">
                        <Label for="toAddress">To Address</Label>
                        <Input type="text" required placeholder="Enter to address" name="toAddress" id="toAddress" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
                    </FormGroup>
                </div>
                <div className="col">
                    <FormGroup className="booking__form d-inline-block me-4 mb-4">
                        <Label for="journeyDate">Journey Date</Label>
                        <Input type="date" required name="journeyDate" id="journeyDate" placeholder="Enter journey date" value={journeyDate} onChange={(e) => setJourneyDate(e.target.value)} />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <FormGroup className="booking__form d-inline-block me-1 mb-4">
                        <Label for="journeyTime">Journey Time</Label>
                        <Input type="time" required name="journeyTime" placeholder="Enter journey time" id="journeyTime" value={journeyTime} onChange={(e) => setJourneyTime(e.target.value)} />
                    </FormGroup>
                </div>
                <div className="col">
                    <FormGroup className="booking__form d-inline-block me-1 mb-4">
                        <Label for="journeyTime">Transaction ID</Label>
                        <Input type="text" required placeholder="Transaction ID" name="trans" id="trans" value={trans} onChange={(e) => setTrans(e.target.value)} />
                    </FormGroup>
                </div>
            </div>

            <Button type="submit" className="btn reserve__btn mt-4 bg-secondary text-white ">
                Reserve Now
            </Button>
        </Form>
    );
};

export default BookingForm;
