import React from 'react';

const CourseCard = ({ image, title, courses, delay }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="shadow-sm p-3 mb-5 bg-white rounded h-100">
        <img src={image} className="img-fluid w-100 mb-3" alt={title} />
        <h5 className="mt-2 fw-bold">{title}</h5>
        <h6 className="text-secondary">COURSES</h6>
        <p className="small text-muted">{courses}</p>
      </div>
    </div>
  );
};

export default CourseCard;