import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-success'> Service book Confirmation:</h2>
            <h4>Are you sure to take {serviceId} Sevices? <small></small></h4>
            <p> Procced to continue, go back for cancell.</p>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;