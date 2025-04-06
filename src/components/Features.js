import React from 'react';

const Features = () => {
  return (
    <section className="pt-6 pb-7" id="features">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <h2 className="heading-black">
              Devevolution offers everything you need.
            </h2>
            <p className="text-muted lead">
              Whether you're just starting out or looking to scale, we’ve got
              the expertise and tools to meet your needs. Let us help you
              achieve your goals and take your business to the next level.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-10 mx-auto">
            <div className="row feature-boxes">
              {/* Feature Boxes */}
              {['Custom Website Design & Development.', 'Branding & Graphic Design', 'Search Engine Optimisation', 'Website Redesign & Optimization'].map((feature, index) => (
                <div key={index} className="col-md-6 box">
                  <div className={`icon-box box-${index === 0 ? 'primary' : index === 1 ? 'success' : index === 2 ? 'danger' : 'info'}`}>
                    <div className="icon-box-inner">
                      <span data-feather={index === 0 ? 'edit-3' : index === 1 ? 'monitor' : index === 2 ? 'search' : 'globe'} width="35" height="35"></span>
                    </div>
                  </div>
                  <h5>{feature}</h5>
                  <p className="text-muted">
                    {index === 0 && 'We create unique, professional websites that are fully customized to fit your brand and goals including integration with E-commerce platforms like Shopify'}
                    {index === 1 && 'Your brand deserves to stand out. We offer Logo Design, Branding Packages and Social Media Packages'}
                    {index === 2 && 'We help you get found online with our expert SEO services so you can get noticed by local customers and rank higher on Google'}
                    {index === 3 && 'Revamp your website with modern design and features and improve user experience and maximize conversions.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
