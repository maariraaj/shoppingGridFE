import React from 'react';
import SideNavbar from '../components/SideNavbar';
import ProductList from '../components/ProductList';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <SideNavbar />
            <ProductList />
        </div>
    );
};

export default Home;
