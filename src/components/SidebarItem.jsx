import React from 'react';

const SidebarItem = ({ image, title, subtitle, linkText, hideBorder }) => {
  return (
    <div className={`row sidebar-item align-items-center ${hideBorder ? 'border-bottom-0' : ''}`}>
      <div className="col-4">
        <img src={image} className="img-fluid" alt={title} />
      </div>
      <div className="col-8">
        <h6>{title}</h6>
        <p className="small text-muted mb-1">{subtitle}</p>
        <a href="#" className="small text-decoration-none">{linkText}</a>
      </div>
    </div>
  );
};

export default SidebarItem;