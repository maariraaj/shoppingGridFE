import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/slices/cartSlice';
import '../styles/SideNavbar.css';

const SideNavbar = () => {
    const dispatch = useDispatch();

    const handleCategoryChange = (e) => {
        dispatch(setFilters({ category: e.target.value }));
    };

    const handlePriceRangeChange = (e) => {
        const [min, max] = e.target.value.split('-').map(Number);
        dispatch(setFilters({ priceRange: [min, max] }));
    };

    const handleSortChange = (e) => {
        dispatch(setFilters({ sort: e.target.value }));
    };

    return (
        <div className="side-navbar">
            <h3>Filter & Sort</h3>

            <div className="filter-section">
                <label htmlFor="category">Category</label>
                <select id="category" onChange={handleCategoryChange}>
                    <option value="all">All Categories</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furniture</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>

            <div className="filter-section">
                <label htmlFor="price">Price Range</label>
                <select id="price" onChange={handlePriceRangeChange}>
                    <option value="0-5000">All</option>
                    <option value="0-500">0 - 500</option>
                    <option value="500-1000">500 - 1000</option>
                    <option value="1000-2000">1000 - 2000</option>
                    <option value="2000-5000">Above 2000</option>
                </select>
            </div>

            <div className="filter-section">
                <label htmlFor="sort">Sort By</label>
                <select id="sort" onChange={handleSortChange}>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                    <option value="price-asc">Price Low to High</option>
                    <option value="price-desc">Price High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default SideNavbar;