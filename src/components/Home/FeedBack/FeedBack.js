import React from 'react';
import client1 from '../../../images/customer-1.png';
import client2 from '../../../images/customer-2.png';
import client3 from '../../../images/customer-3.png';
import FeedBackDetail from '../FeedBackDetail/FeedBackDetail';
import './FeedBack.css';

const feedBackData = [
    {
        img: client1,
        name: 'Nash Patrik',
        designation: 'CEO, Manila Power',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam nam rerum dolore exercitationem praesentium!'
    },
    {
        img: client2,
        name: 'Donald Tusk',
        designation: 'CEO, Donald Auto',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam nam rerum dolore exercitationem praesentium!'
    },
    {
        img: client3,
        name: 'Plutin Char',
        designation: 'CEO, Hydro Shipping',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam nam rerum dolore exercitationem praesentium!'
    },
]

const FeedBack = () => {
    return (
        <div className="container pb-5">
            <div class="feedback-header">
                <h3> <b> Clients' <span style={{color: '#7AB259'}}>Feedback</span> </b></h3>
            </div>
            <div className="d-flex justify-content-center">
                {
                    feedBackData.map(feedBack => <FeedBackDetail feedBack={feedBack} key={feedBack.name}></FeedBackDetail>)
                }
            </div>
        </div>
    );
};

export default FeedBack;