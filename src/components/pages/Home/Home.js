import React from 'react';
import About from '../About/About';
import Aware from '../Aware/Aware';
import Banner from '../Banner/Banner';
import Botol from '../Botol/Botol';
import Contact from '../Contact/Contact';
import JoinUs from '../JoinUs/JoinUs';

import Made from '../Made/Made';
import Map from '../Map/Map';
import ProductSlide from '../ProductSlide/ProductSlide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductSlide></ProductSlide>
            <About></About>
            <Made></Made>
            <Aware></Aware>
            
            <Contact></Contact>
            <Botol></Botol>
            <Map></Map>
            <JoinUs></JoinUs>
        </div>
    );
};

export default Home;