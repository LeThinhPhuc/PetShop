import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "../services/cartService";

// Thunk: Lấy giỏ hàng
export const getGioHang = createAsyncThunk(
    "cart/getGioHang",
    async (userId, thunkAPI) => {
        try {
            const response = await cartService.getGioHang(userId);
            console.log(response.data)
            return response.data; // <-- sửa ở đây
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Thunk: Thêm vào giỏ hàng
export const themVaoGio = createAsyncThunk(
    "cart/themVaoGio",
    async (data, thunkAPI) => {
        try {
            const response = await cartService.themVaoGio(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

// Slice
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        gioHang: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearCartState: (state) => {
            state.gioHang = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Get cart
            .addCase(getGioHang.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getGioHang.fulfilled, (state, action) => {
                state.loading = false;
                state.gioHang = action.payload;
            })
            .addCase(getGioHang.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add to cart
            .addCase(themVaoGio.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(themVaoGio.fulfilled, (state, action) => {
                state.loading = false;
                state.gioHang = action.payload;
            })
            .addCase(themVaoGio.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearCartState } = cartSlice.actions;

export default cartSlice.reducer;
