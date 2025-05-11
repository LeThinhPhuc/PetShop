import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
    },
});

export default store;
