// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

// Thunk: Đăng nhập
export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        const response = await authService.login(credentials);
        return response.data; // { token, user }
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});

// Thunk: Đăng ký
export const signup = createAsyncThunk("auth/signup", async (userData, thunkAPI) => {
    try {
        const response = await authService.signup(userData);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            // LOGIN
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // SIGNUP
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                // Sau đăng ký có thể auto login
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem("accessToken", action.payload.token);
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
