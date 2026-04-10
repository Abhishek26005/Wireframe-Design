import React from 'react';
import banner from '../assets/images/banner.jpg';
const Hero = () => {
  return (
    <section className="container-fluid bg-light-grey">
      <div className="row align-items-center">
        <div className="col-md-7 p-4" data-aos="fade-right">
          <img src={banner} className="img-fluid" alt="Students studying" />
        </div>
        <div className="col-md-5 p-5" data-aos="fade-left">
          <h1 className="fw-bold">Learn something new everyday</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="btn btn-dark w-100 py-2">Start here</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;