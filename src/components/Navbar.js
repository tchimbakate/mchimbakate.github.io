import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <section className="smart-scroll">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark w-100">
          <Link className="navbar-brand heading-black" to="/">
            <img
                src="/img/monogram-hq-2.png"
                alt="Devevolution Logo"
                style={{ maxHeight: "40px" }}
            />
          </Link>
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
                <Link className="nav-link page-scroll" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-scroll d-flex flex-row align-items-center" to="/contact">
                  <em data-feather="mail" width="18" height="18" className="mr-2" />
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
  );
};

export default Navbar;