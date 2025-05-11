// src/redux/slices/ProductSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../services/categoryService";

// GET ALL
export const fetchProductTypes = createAsyncThunk("productTypes/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await categoryService.getAllLoaiSanPham();
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});
export const fetchSizes = createAsyncThunk("sizes/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await categoryService.getAllKichCo();
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});
export const fetchBranchs = createAsyncThunk("branchs/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await categoryService.getAllThuongHieu();
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        listProductTypes: [],
        listSizes: [],
        listBranchs: [],
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // GET ALL Loai San Pham
            .addCase(fetchProductTypes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductTypes.fulfilled, (state, action) => {
                state.loading = false;
                state.listProductTypes = action.payload;
            })
            .addCase(fetchProductTypes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // GET ALL Kich Co
            .addCase(fetchSizes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSizes.fulfilled, (state, action) => {
                state.loading = false;
                state.listSizes = action.payload;
            })
            .addCase(fetchSizes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // GET ALL Thuong Hieu
            .addCase(fetchBranchs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBranchs.fulfilled, (state, action) => {
                state.loading = false;
                state.listBranchs = action.payload;
            })
            .addCase(fetchBranchs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


    },
});

export const { } = categorySlice.actions;
export default categorySlice.reducer;
