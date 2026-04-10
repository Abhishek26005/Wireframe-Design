import React from 'react';

const Footer = () => {
  return (
    <footer className="container-fluid py-4 border-top">
      <div className="d-flex justify-content-between px-4">
        <span className="text-muted small">&copy; {new Date().getFullYear()} Cevays Academy. All rights reserved.</span>
        <div>
          <a href="#" className="text-muted small text-decoration-none me-3">Terms</a>
          <a href="#" className="text-muted small text-decoration-none">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;