import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, Firestore, getDocs, orderBy, query} from "firebase/firestore/lite";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (payload: Firestore) => {
        const productsCol = query(collection(payload, "products"), orderBy("productId", "asc"));
        const productsSnapshot = await getDocs(productsCol);
        const products = productsSnapshot.docs.map(doc => doc.data());
        console.log(products)
        return products as Array<productsType>
})

export const sliceProductsReducer = createSlice({
    name: 'products',
    initialState: [] as Array<productsType>,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(action)
            return action.payload
        })
    }
})

export const productsReducer = sliceProductsReducer.reducer

type productsType = {
    productId: string
    productImg: string
    productName: string
    productPrice: number
}