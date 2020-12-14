import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
      img: service1,  
      name: 'Web & Mobile Design',
      description: 'We craft stunning and amazing  web UI, using a well drafted UX to fit your product.'  
    },
    {
        img: service2,  
        name: 'Graphic Design',
        description: 'Amazing flyer, social media  posts and brand representations  that would make your brand  stand out.'  
    },
    {
        img: service3,  
        name: 'Wed development',
        description: 'With well written codes, we  build amazing apps for all platforms, mobile and web  app in general.'  
    }     
]

const Services = () => {
    return (
        <div className="container">
            <div className="text-center mt-5 pt-5">
                <h3><b>Provide awesome <span style={{color: '#7AB259'}}>services</span></b></h3>
            </div>
            <div style={{cursor: 'pointer'}} className="d-flex justify-content-center">
                <div className="row mt-2 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;