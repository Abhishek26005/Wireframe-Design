import React from 'react';
import SidebarItem from './SidebarItem';
import thesisVideo from '../assets/videos/thesis.mp4';
import thesisFisma from '../assets/images/thesis-fisma.jpg';
import thesisNowAndThen from '../assets/images/thesis-now-and-then.jpg';

const Thesis = () => {
  return (
    <section className="container-fluid py-5">
      <div className="row">
        <div className="col-md-7 px-4 mb-4" data-aos="fade-up">
          <video src={thesisVideo} className="w-100 shadow-sm" controls></video>
          <h2 className="mt-4 fw-bold">Reimagine urban</h2>
          <p>"Curabitur vitae libero in ipsum porttitor consequat. Aliquam eu magna sed massa ultricies luctus."</p>
        </div>

        <div className="col-md-5 px-4" data-aos="fade-left" data-aos-delay="200">
          <SidebarItem 
            image={thesisFisma}
            title="Fisma: Design and Prototype"
            subtitle="Designer showcase of new prototype product"
            linkText="Read more"
          />
          <SidebarItem 
            image={thesisNowAndThen}
            title="Now and then"
            subtitle="Research study about New York"
            linkText="Read more"
            hideBorder={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Thesis;