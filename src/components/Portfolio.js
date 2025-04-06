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
            <br/>
            <br/>
            <div className="col-md-6 mx-auto text-center">
            <h1>Our Work</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {/* Shopify Ecommerce Card */}
                        <div className="col-md-6 mb-4">
                            <a
                                href="https://9ydrh3-n0.myshopify.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-link"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div className="card h-100">
                                    <img
                                        src="/img/aurelia-london-high-resolution-logo-grayscale.png"
                                        className="card-img-top"
                                        alt="Ecommerce (Shopify)"
                                        style={{
                                            height: "250px",
                                            width: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Ecommerce (Shopify)</h5>
                                        <p className="card-text">
                                            <ul className="mt-2">
                                                <li>Mobile-optimized responsive design</li>
                                                <li>Seamless checkout experience</li>
                                                <li>Product recommendations engine</li>
                                                <li>Integrated payment gateways</li>
                                                <li>SEO-optimized product pages</li>
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
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div className="card h-100">
                                    <img
                                        src="/img/devevolution-home.png"
                                        className="card-img-top"
                                        alt="Bespoke Websites"
                                        style={{
                                            height: "250px",
                                            width: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center"
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