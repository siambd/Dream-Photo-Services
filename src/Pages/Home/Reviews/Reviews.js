import React from 'react';

import user1 from '../../../images/user1.png'
import user2 from '../../../images/user2.png'
import user3 from '../../../images/user3.jpg'
import Review from '../Review/Review';

const reviews =[
    {id:1, name:'Will farado', img: user1, rating: '4 out of 5', ureview:'Ok guys, here is a completely unbiased, 100% honest review. This guy is bery good in photography. '},

    {id:2, name:'Pete lau', img: user2, rating: '5 out of 5', ureview: 'This Guy capture amazing photo, i book him for my wedding anniversary, he is very cool guy. '},

    {id:3, name:'Monte farado', img: user3, rating: '4.5 out of 5', ureview: 'I book his personal photography service, he campture amazing photo for my social media.'}
]

const Reviews = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary'> My user review: </h2>
            <div className='row'>
                {
                   reviews.map( review => <Review
                   key={review.id}
                   review={review}
                   ></Review> ) 
                }

            </div>
        </div>
    );
};

export default Reviews;