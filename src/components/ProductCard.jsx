import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        onAddToCart(product);
    };
    return (
        <div
            className={`product-card ${hover ? 'hover' : ''}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="image-container">
                <img src={product.thumbnail} alt={product.title} className="product-image fade-in" />
                {product.images && product.images.length > 1 && (
                    <img
                        src={product.images[1]}
                        alt={`${product.title} alternate`}
                        className="overlay-img fade-in"
                    />
                )}
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">₹{product.price.toFixed(2)}</p>
                <button className="btn-ripple" onClick={handleClick}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;