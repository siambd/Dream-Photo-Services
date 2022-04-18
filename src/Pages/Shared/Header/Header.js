import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">DREAM PHOTOSTORE</Navbar.Brand>
                    <Nav className="me-auto ms-5">
                        <Link className='link-color' to="/"> Home </Link>
                        <Link className='link-color' to="/services"> Services </Link>
                        <Link className='link-color' to="/reviews"> Reviews </Link>
                        <Link className='link-color' to="/blogs"> Blogs </Link>
                        <Link className='link-color' to="/about"> About Me </Link>
                       
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;