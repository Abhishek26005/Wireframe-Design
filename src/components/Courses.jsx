import React from 'react';
import CourseCard from './CourseCard';
import couse_software from '../assets/images/course-software.jpg';
import course_computer_art from '../assets/images/course-computer-art.jpg';
import course_design from '../assets/images/course-design.jpg';
import course_data from '../assets/images/course-data.jpg';
import course_business from '../assets/images/course-business.jpg';
import course_marketing from '../assets/images/course-marketing.jpg';
const Courses = () => {
  const courseData = [
    { title: "Software Engineering", image: couse_software, courses: "Web Development, Mobile Development, IoT, APIs" },
    { title: "Computer Art", image: course_computer_art, courses: "Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation" },
    { title: "Design", image: course_design, courses: "User Experience Design, User Research, Visual Design" },
    { title: "Data", image: course_data, courses: "Data Science, Big Data, SQL, Data Visualization" },
    { title: "Business", image: course_business, courses: "Product Development, Business Development, Startup" },
    { title: "Marketing", image: course_marketing, courses: "Analytics, Content Marketing, Mobile Marketing" }
  ];

  return (
    <section className="container-fluid py-5" style={{ backgroundColor: 'rgb(233, 231, 231)' }}>
      <div>
        <h2 className="fw-bold text-center" data-aos="fade-up">Start Learning</h2>
        <div className="row g-4 mt-4 justify-content-center px-4" data-aos="fade-up" data-aos-delay="100">
          {courseData.map((course, index) => (
            <CourseCard key={index} image={course.image} title={course.title} courses={course.courses} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;