import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

// Save cart to localStorage
const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch (e) {
    console.error("Error saving to localStorage", e);
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

// Persist cart on any state update
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
