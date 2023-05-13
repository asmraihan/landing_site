import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-516.8px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;