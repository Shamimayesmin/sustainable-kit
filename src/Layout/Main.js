import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from '../components/pages/Footer/Footer';
// ..

const Main = () => {
    AOS.init();
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Main;