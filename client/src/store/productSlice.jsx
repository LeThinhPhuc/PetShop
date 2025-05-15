// src/redux/slices/ProductSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../services/ProductService";

// GET ALL
export const fetchProducts = createAsyncThunk("products/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await productService.getAll();
        console.log("res.data : ", res.data)
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});

// GET BY ID
export const fetchProductById = createAsyncThunk("products/fetchById", async (id, thunkAPI) => {
    try {
        const res = await productService.getById(id);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});

// CREATE
export const createProduct = createAsyncThunk("products/create", async (data, thunkAPI) => {
    try {
        const res = await productService.create(data);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});

// UPLOAD
export const uploadProduct = createAsyncThunk("products/upload", async (data, thunkAPI) => {
    try {
        const response = await fetch("http://localhost:8080/upload", {
            method: "POST",
            body: data, // KHÔNG set Content-Type, fetch sẽ tự thêm đúng boundary cho multipart
        });
        if (!response.ok) throw new Error("Upload failed");
        return await response.text();
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});


// UPDATE
export const updateProduct = createAsyncThunk("products/update", async ({ id, data }, thunkAPI) => {
    try {
        const res = await productService.update(id, data);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});

// DELETE
export const deleteProduct = createAsyncThunk("products/delete", async (id, thunkAPI) => {
    try {
        await productService.delete(id);
        return id; // Trả về id để lọc khỏi danh sách
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        selected: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearSelectedProduct: (state) => {
            state.selected = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // GET ALL
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // GET BY ID
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // CREATE
            .addCase(createProduct.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })

            // UPDATE
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.list.findIndex((d) => d.id === action.payload.id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
            })

            // DELETE
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.list = state.list.filter((d) => d.id !== action.payload);
            });
    },
});

export const { clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
