/* eslint-disable max-lines */
import React, { useRef } from 'react';
import { Col, Container, Row } from 'reactstrap';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginContext from '../../context/loginContext';
import '../../styles/header.css';

const Header = () => {
    const b = useContext(loginContext);
    // console.log(b.loginData.email);
    let targetEmail = b.loginData.email;
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

    const navLinks = [
        {
            path: '/home',
            display: 'Home'
        },
        {
            path: '/about',
            display: 'About'
        },
        {
            path: '/cars',
            display: 'Cars'
        }
    ];

    return (
        <header className="header">
            <div className="header__top">
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="header__top__left">
                                <span>Need Help?</span>
                                <span className="header__top__help">
                                    <i class="ri-phone-line"></i> +88 01876531138
                                </span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                            <Link to="/login" className="d-flex align-items-center gap-1">
                                    <i class="ri-login-circle-line"></i> Login{' '}
                                </Link>
                                <Link to="/register" className="d-flex align-items-center gap-1">
                                    <i class="ri-user-line"></i> Register{' '}
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="header__middle">
                <Container>
                    <Row>
                        <Col lg="4" md="3" sm="4">
                            <div className="logo">
                                <h1>
                                    <Link to="/home" className=" d-flex align-items-center gap-2">
                                        <i class="ri-roadster-fill"></i>
                                        <span>
                                            Rent Car <br /> Now
                                        </span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2 ">
                                <span>
                                    <i class="ri-earth-line"></i>
                                </span>
                                <div className="header__location-content">
                                    <h4>Bangladesh</h4>
                                    <h6>Chattogram, Bangladesh</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg="3" md="3" sm="4">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-time-line"></i>
                                </span>
                                <div className="header__location-content">
                                    <h4>Sunday to Friday</h4>
                                    <h6>10am - 7pm</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg="2" md="3" sm="0" className=" d-flex align-items-center justify-content-end ">
                            <button className="header__btn btn ">
                                <a href="tel:01876531138">
                               
                                    <i class="ri-phone-line"></i> Request a call
                                </a>
                            </button>
                        </Col> 
                    </Row>
                </Container>
            </div>

            {/* <div className="main__navbar">
                <Container>
                    <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                        <span className="mobile__menu">
                            <i class="ri-menu-line" onClick={toggleMenu}></i>
                        </span>

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav__active nav__item' : 'nav__item')} key={index}>
                                        {item.display}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="nav__right">
                            <div className="search__box">
                                <input type="text" placeholder="Search" />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                    </div> 
                </Container>
            </div> */}
        </header>
    );
};

export default Header;
