import React from 'react';
import '../styles/CartNotification.css';

const CartNotification = ({ message }) => {
    return (
        <div className="cart-notification">
            <p>{message}</p>
        </div>
    );
};

export default CartNotification;
