import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> DREAM PHOTOSTORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='link-color' to="/"> Home </Link>
                            <Link className='link-color' to="/services"> Services </Link>
                            <Link className='link-color' to="/reviews"> Reviews </Link>
                            <Link className='link-color' to="/blogs"> Blogs </Link>
                           
                        </Nav>
                        <Nav>
                            <Link className='link-color me-4 my-auto' to="/about"> About Me </Link>

                           { 
                           user ?
                           <button className='btn btn-danger btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>:
                       
                            <Link className='link-color' to="/Login"> Login </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          


        </>
    );
};

export default Header;