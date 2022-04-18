import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, img, name, price, description}= service;
    const navigate = useNavigate();

    
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='service-image' src={img} alt="" />
            <h4>{name}</h4>
            <p className='text-primary'>Price:{price}$</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book</button>
        </div>
    );
};

export default Service;