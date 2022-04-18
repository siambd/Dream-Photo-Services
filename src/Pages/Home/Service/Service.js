import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {id, img, name, price, description}= service;
    return (
        <div className='service'>
            <img className='service-image' src={img} alt="" />
            <h4>{name}</h4>
            <p className='text-primary'>Price:{price}$</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book now</button>
        </div>
    );
};

export default Service;