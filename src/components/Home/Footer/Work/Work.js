import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../../images/carousel-1.png';
import carousel2 from '../../../../images/carousel-2.png';
import carousel3 from '../../../../images/carousel-4.png';
import carousel5 from '../../../../images/carousel-5.png';

import './Work.css';

const Work = () => {
    return (
        <div id="portfolio" class="work-bg">
            <div>
                <h3 class="work-header"> <b><span style={{color: "white"}}>Here are some of</span> <span style={{color: '#7AB259'}}>our works </span></b></h3>
            </div>  
            <div class="work-gallery">
                <Carousel>
                    <Carousel.Item> 
                        <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                        />    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel3} 
                        alt="Third slide"
                        /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel5} 
                        alt="Third slide"
                        /> 
                    </Carousel.Item>
                </Carousel>
   

            </div>
        </div>
    );
};

export default Work;