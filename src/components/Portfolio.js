import React, {useEffect, useRef} from 'react';

const Portfolio = () => {
    const h1Ref = useRef(null);

    useEffect(() => {
        if (h1Ref.current) {
            h1Ref.current.focus();
            h1Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
      <section className="portfolio py-6">
        <br />
        <br />
        <div className="col-md-6 mx-auto text-center">
          <h1>Our Work</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="row">
              {/* EZO Route Planner */}
              <div className="col-md-6 mb-4">
                <a
                  href="https://ezo.ie/for-drivers/route-planner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card h-100">
                    <img
                      src="/img/ezo.png"
                      className="card-img-top"
                      alt="EZO Route Planner"
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">EZO Route Planner</h5>
                      <p className="card-text">
                        <ul className="mt-2">
                          <li>Optimised EV Routing</li>
                          <li>Integrated Charging Availability</li>
                          <li>Custom Battery Settings</li>
                          <li>User-Friendly Interface</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Neurodev */}
              <div className="col-md-6 mb-4">
                <a
                  href="https://neurodev.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card h-100">
                    <img
                      src="/img/neurodev.png"
                      className="card-img-top"
                      alt="EZO Route Planner"
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Neurodev</h5>
                      <p className="card-text">
                        <ul className="mt-2">
                          <li>Streamlined Online Booking</li>
                          <li>Real-Time Availability</li>
                          <li>Automated Confirmation and Reminders.</li>
                          <li>Comprehensive Client Management </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {/* Bespoke Websites Card */}
              <div className="col-md-6 mb-4">
                <a
                  href="https://devevolution.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card h-100">
                    <img
                      src="/img/devevolution-high-resolution-logo.png"
                      className="card-img-top"
                      alt="Bespoke Websites"
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Bespoke Websites</h5>
                      <p className="card-text">
                        <ul className="mt-2">
                          <li>Custom domain + secure hosting</li>
                          <li>24/7 support & lifetime maintenance</li>
                          <li>Blazing-fast, SEO-friendly performance</li>
                          <li>Competitive pricing with no lock-in contracts</li>
                          <li>Scalable for future expansions</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Portfolio;