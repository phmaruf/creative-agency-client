import React from 'react';

import Customer from '../Customer/Customer';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Work from '../Footer/Work/Work';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Customer></Customer>
            <Services></Services>
            <Work></Work>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;