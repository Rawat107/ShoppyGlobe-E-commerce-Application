import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");
const initialState = savedCart ? JSON.parse(savedCart) : [];


const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addToCart: (state, action) => {
                const item = state.find(i => i.id === action.payload.id)
                if(item) {
                    item.quantity += 1
                }  else {
                    state.push({...action.payload, quantity: 1})
                }
            },

            removeFromCart: (state, action) => {
                return state.filter(item => item.id !== action.payload)
            },
            updateQuantity: (state, action) => {
                const { id, quantity } = action.payload;
                const item = state.find(i => i.id === id);
                if(item) {
                    item.quantity = quantity;
                }
            },
            clearCart: () => {
                return [];
            }
        }
    }
)


export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer