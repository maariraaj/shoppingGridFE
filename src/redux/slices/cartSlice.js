import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    filters: {
        category: 'all',
        priceRange: [0, 5000],
        sort: 'name-asc',
    },
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
    },
});

export const { addToCart, setFilters } = cartSlice.actions;
export default cartSlice.reducer;