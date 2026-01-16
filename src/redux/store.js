import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "/src/redux/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

let saveTimeout;

store.subscribe(() => {
  clearTimeout(saveTimeout);

  saveTimeout = setTimeout(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    } catch (err) {
      console.error(
        "Failed to save cart to localStorage. Are you using Safari?", err
      );
    }
  }, 300);
});

export default store;
