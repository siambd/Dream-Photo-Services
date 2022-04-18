import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, id, img, rating, ureview } = review;
    return (
        <div className=' gx-5 gy-2 col-12 col-md-6 col-lg-4'>
            <div class="card " style={{ width: "18rem" }}>
                <div className='text-center p-2'>
                    <img className=' rounded-circle user-image' src={img} alt="..." />
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">{name}e</h5>
                    <p class="card-text">Rating: {rating}</p>
                    <p class="card-text">{ureview}</p>

                </div>
            </div>
        </div>

    );
};

export default Review;