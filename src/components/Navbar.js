// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <section className="smart-scroll">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark w-100">
        <a className="navbar-brand heading-black" href="index.html">
          <img
            src="/img/monogram-hq-2.png"
            alt="Devevolution Logo"
            style={{ maxHeight: "40px" }}
          />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span data-feather="grid"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link page-scroll d-flex flex-row align-items-center"
                href="#contact"
                id="contact-link"
              >
                <em
                  data-feather="mail"
                  width="18"
                  height="18"
                  className="mr-2"
                />
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
