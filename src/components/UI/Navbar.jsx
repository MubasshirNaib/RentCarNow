/* eslint-disable max-lines */
import React,{ useRef,useContext } from 'react'
import { Col, Container, Row } from 'reactstrap';

import { Link, NavLink } from 'react-router-dom';
import '../../styles/header.css';
import loginContext from '../../context/loginContext';

const Navbar = () => {
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

        // {
        //   path: "/blogs",
        //   display: "Blog",
        // },
        // {
        //   path: "/contact",
        //   display: "Contact",
        // },
    ];

  return (
    <div className="main__navbar">
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
                            <div className="search__box ">
                            {targetEmail}
                            <Link to="/login" className="d-flex align-items-center gap-1">
                                    <i class="ri-user-line"></i> Logout
                                </Link>
                            </div>
                        </div>
                    </div> 
                </Container>
            </div>
  )
}

export default Navbar