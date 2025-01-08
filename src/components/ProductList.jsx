import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import ProductCard from './ProductCard';
import CartNotification from './CartNotification';
import axiosInstance from '../utils/axiosInstance';
import '../styles/ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const { category, priceRange, sort } = useSelector((state) => state.cart.filters);
    const cartItems = useSelector((state) => state.cart.items);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get('/products');
                let fetchedProducts = response.data.products;

                if (category !== 'all') {
                    fetchedProducts = fetchedProducts.filter(
                        (product) => product.category.toLowerCase() === category.toLowerCase()
                    );
                }

                fetchedProducts = fetchedProducts.filter(
                    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
                );

                switch (sort) {
                    case 'name-asc':
                        fetchedProducts.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                    case 'name-desc':
                        fetchedProducts.sort((a, b) => b.title.localeCompare(a.title));
                        break;
                    case 'price-asc':
                        fetchedProducts.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-desc':
                        fetchedProducts.sort((a, b) => b.price - a.price);
                        break;
                    default:
                        break;
                }

                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category, priceRange, sort]);

    useEffect(() => {
        if (cartItems.length > 0) {
            const lastAddedItem = cartItems[cartItems.length - 1];
            setNotification(`${lastAddedItem.title} has been added to your cart!`);

            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [cartItems]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-list-container">
            {loading ? (
                <div className='spinner-container'>
                    <div className="loader"></div>
                </div>
            ) : (
                <div>
                    <div className="product-list">
                        {products.length > 0 && (
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                            ))
                        )}
                    </div>
                    {products.length < 1 && <p className='no-products'>No products found matching your criteria.</p>}
                </div>

            )}

            {notification && <CartNotification message={notification} />}
        </div>
    );
};

export default ProductList;