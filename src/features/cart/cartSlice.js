import { createSlice } from "@reduxjs/toolkit";
import { getAllEvents } from "../../utils";

const defaultState = {
    cartItems: [],
    numItemsInCart: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addItem: (state, action) => {
            const event = action.payload;
            state.cartItems.push(event);
            localStorage.setItem(`event`, JSON.stringify(event));
            state.numItemsInCart +=1
        },
        removeItem: (state)=> {
             const event = action.payload;
            state.cartItems = state.cartItems.filter((i) => i.date === event.date);
           
            localStorage.removeItem(`event`);
            state.numItemsInCart -=1
        },
        clearCart: (state)=> {
           localStorage.setItem(`event`, JSON.stringify(defaultState));
            return defaultState;
        }
    }
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;