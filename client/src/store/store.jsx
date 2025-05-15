import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";



const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
        auth: authSlice,
        cart: cartSlice,
    },
});

export default store;
