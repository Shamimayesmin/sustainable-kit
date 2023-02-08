import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Made from '../Made/Made';
import ProductSlide from '../ProductSlide/ProductSlide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductSlide></ProductSlide>
            <About></About>
            <Made></Made>
            <Contact></Contact>
        </div>
    );
};

export default Home;