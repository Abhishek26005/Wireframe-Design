import React from 'react';
import SidebarItem from './SidebarItem';
import infomain from '../assets/images/information-main.jpg';
import infoorientation from '../assets/images/information-orientation.jpg';
import infocampus from '../assets/images/information-campus.jpg';
import infoguestlecture from '../assets/images/information-guest-lecture.jpg';

const Information = () => {
  return (
    <section className="container-fluid py-5">
      <div className="row">
        <div className="col-md-7 px-4 mb-4" data-aos="fade-up">
          <img src={infomain} className="img-fluid w-100" alt="Main News" />
          <h2 className="mt-4 fw-bold">It doesn't hurt to keep practicing</h2>
          <p>"Curabitur vitae libero in ipsum porttitor consequat. Aliquam eu magna sed massa ultricies luctus. Curabitur vitae libero in ipsum porttitor consequat."</p>
          <small className="text-muted">Emanuel, Sr Strategist at Hirshhorn</small>
        </div>

        <div className="col-md-5 px-4" data-aos="fade-left" data-aos-delay="200">
          <SidebarItem 
            image={infoorientation}
            title="Orientation date"
            subtitle="Tue 10/11 & Wed 10/12: 8am-3pm"
            linkText="Read more"
          />
          <SidebarItem 
            image={infocampus}
            title="Our campus"
            subtitle="Find which campus is close to you"
            linkText="Read more"
          />
          <SidebarItem 
            image={infoguestlecture}
            title="Special guest lecture"
            subtitle="Join a keynote with Oliver Sack"
            linkText="Read more"
            hideBorder={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Information;