import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import authSlice from "./authSlice";


const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
        auth: authSlice,
    },
});

export default store;
