import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cartIcon from '../assets/cart-icon.svg';
import '../styles/Navbar.css';

const Navbar = () => {
    const cartCount = useSelector((state) => state.cart.items.length);
    const [animateCart, setAnimateCart] = useState(false);

    useEffect(() => {
        if (cartCount > 0) {
            setAnimateCart(true);
            const timer = setTimeout(() => setAnimateCart(false), 500);
            return () => clearTimeout(timer);
        }
    }, [cartCount]);

    return (
        <nav className="navbar">
            <div className="navbar-left">Shopping Grid</div>
            <div className="navbar-right">
                <img
                    src={cartIcon}
                    alt="Cart"
                    className={`cart-icon ${animateCart ? 'animate' : ''}`}
                />
                {cartCount > 0 && (
                    <span className={`cart-count ${animateCart ? 'animate' : ''}`}>
                        {cartCount}
                    </span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;