import { createSlice } from "@reduxjs/toolkit";
import { getAllEvents } from "../../utils";

const defaultState = {
    cartItems: getAllEvents() || [],
    numItemsInCart: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addItem: (state, action) => {

        },
        removeItem: (state)=> {
            
        },
        clearCart: (state, action)=> {

        }
    }
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;