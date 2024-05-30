import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartDataStore";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
