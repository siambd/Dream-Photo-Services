import React from 'react';


const About = () => {
  return (
    <div className='d-flex ps-4 pt-4'>
      <div className='ms-5'>
        <h2> About Me :</h2>
        <p> Name: MD ASRAFUL ISLAM</p>
        <p>Educational background: Currently pursuing B.Tech from NIT trichy, India.</p>
        <p> I want to be a MERN developer in next 3 month, and wantt to be a good person. </p>
      </div>
      <div>
        <img className='img-fluid w-25 ms-5 ps-5' src="/about.jpeg" alt="" />
      </div>



    </div>
  );
};

export default About;