import React from 'react';
import Slack from '../../../images/logos/slack.png';
import Google from '../../../images/logos/google.png';
import Uber from '../../../images/logos/uber.png';
import Netflix from '../../../images/logos/netflix.png';
import Airbnb from '../../../images/logos/airbnb.png';

const Customer = () => {
    return (
        <div className="container">
            <div style={{margin: '40px'}} className="row d-flex justify-content-around">
                <div className="col-md-2 col-sm-6">
                    <a href="https://slack.com/intl/en-bd/"><img style={{ height: '50px', width: '150px'}} src={Slack} alt=""/> </a>   
                </div>
                <div className="col-md-2 col-sm-6"> 
                    <a href="https://www.google.com/"><img style={{ height: '50px', width: '150px'}} src={Google} alt=""/></a>
                </div>
                <div className="col-md-2 col-sm-6">
                    <a href="https://auth.uber.com/login/"><img style={{ height: '50px', width: '150px'}} src={Uber} alt=""/></a>
                </div>
                <div className="col-md-2 col-sm-6">
                    <a href="https://www.netflix.com/bd/"><img style={{ height: '50px', width: '150px'}} src={Netflix} alt=""/></a>
                </div>
                <div className="col-md-2 col-sm-6">
                    <a href="https://www.airbnb.com/"><img style={{ height: '50px', width: '150px'}} src={Airbnb} alt=""/></a>
                </div> 
            </div>
        </div>
    );
};

export default Customer;