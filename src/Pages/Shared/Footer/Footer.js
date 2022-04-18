import React from 'react';
import './Footer.css'

const Footer = () => {
    const today =new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <p className='text-color pt-3 d-flex justify-content-center'> <small> copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;