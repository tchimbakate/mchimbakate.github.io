// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 mr-auto">
            <h5>About Devevolution</h5>
            <p className="text-muted">
              At DevEvolution, we specialize in creating stunning, user-friendly
              websites tailored to the unique needs of startups, small
              businesses, and individuals. Whether you need a professional
              website, e-commerce platform, or a complete digital
              transformation, we provide high-quality web design and development
              solutions to help you stand out online.
            </p>
            <ul className="list-inline social social-sm">
              <li className="list-inline-item">
                <a href="https://facebook.com/devevolutionuk"><i className="fa fa-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://x.com/Devevolutionuk"><i className="fa fa-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/devevolutionuk/"><i className="fa fa-instagram"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/devevolution"><i className="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy.html">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-muted text-center small-xl">
            &copy; Built By Devevolution - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
