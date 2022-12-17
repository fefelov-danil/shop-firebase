import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, Firestore, getDocs, orderBy, query} from "firebase/firestore/lite";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (payload: Firestore) => {
        const productsCol = query(collection(payload, "products"), orderBy("productId", "asc"));
        const productsSnapshot = await getDocs(productsCol);
        const products = productsSnapshot.docs.map(doc => doc.data());
        return products as Array<ProductType>
})

const sliceProductsReducer = createSlice({
    name: 'products',
    initialState: [] as Array<ProductType>,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const productsReducer = sliceProductsReducer.reducer

export type ProductType = {
    productId: string
    productImg: string
    productName: string
    productPrice: number
}