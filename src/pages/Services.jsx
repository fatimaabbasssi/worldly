import React from 'react'


const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern and responsive websites using the latest technologies.',
      icon: 'bi-code-slash',
    },
    {
      title: 'App Development',
      description: 'Custom mobile applications for Android and iOS platforms.',
      icon: 'bi-phone',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and user-centric interface designs for apps and websites.',
      icon: 'bi-brush',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site ranking with our SEO optimization services.',
      icon: 'bi-graph-up-arrow',
    },
    {
      title: 'Cloud Services',
      description: 'Secure and scalable cloud solutions for your business.',
      icon: 'bi-cloud',
    },
    {
      title: 'Technical Support',
      description: '24/7 expert support to keep your systems running smoothly.',
      icon: 'bi-headset',
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Our Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4-2" key={index}>
            <div className="card h-100 shadow-sm service-card text-center p-3">
              <div className="mb-3">
                <i className={`bi ${service.icon} display-4 text-primary`}></i>
              </div>
              <h5 className="fw-semibold">{service.title}</h5>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
