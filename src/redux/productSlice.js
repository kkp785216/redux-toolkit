import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    }

    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProducts.pending, (state, action) => {
    //             state.status = STATUSES.LOADING
    //         })
    //         .addCase(fetchProducts.fulfilled, (state, action) => {
    //             state.status = STATUSES.IDLE
    //             // Add any fetched posts to the array
    //             state.data = action.payload
    //         })
    //         .addCase(fetchProducts.rejected, (state, action) => {
    //             state.status = STATUSES.error
    //         })
    // }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch("https://fakestoreapi.com/products/");
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}

// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch("https://fakestoreapi.com/products/");
//     const data = await res.json();
//     return data;
// });