import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "components/reducers/products-reducer";

export const fetchProductsInCartLS = createAsyncThunk('cart/fetchProductsInCartLS',
    async () => {
        const stateLS = localStorage.getItem('cart')
        if (stateLS) {
            const stateLSParse = JSON.parse(stateLS)
            return stateLSParse.productsInCart
        }
    })

const sliceCartReducer = createSlice({
    name: 'cart',
    initialState: {
        cartCount: 0,
        totalCost: 0,
        productsInCart: [] as Array<ProductCartType>
    },
    reducers: {
        changeCartCount(state, action: PayloadAction<number>) {
            let totalCost = 0
            for (let i = 0; i < state.productsInCart.length; i++) {
                totalCost += state.productsInCart[i].productPrice * state.productsInCart[i].count
            }
            state.totalCost = totalCost
            state.cartCount = state.cartCount + action.payload
        },
        addProductToCart(state, action: PayloadAction<ProductType>) {
            if (state.productsInCart.find(p => p.productId === action.payload.productId)) {
                state.productsInCart.map(p => p.productId === action.payload.productId && p.count++)
            } else {
                state.productsInCart.push({...action.payload, count: 1})
            }
        },
        subtractProductToCart(state, action: PayloadAction<string>) {
            const index = state.productsInCart.findIndex((p => p.productId === action.payload))
            if (state.productsInCart[index].count > 1) {
                state.productsInCart[index].count--
            } else {
                state.productsInCart.splice(index, 1)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsInCartLS.fulfilled, (state, action) => {
            state.productsInCart = action.payload
        })
    }
})

export const {changeCartCount, addProductToCart, subtractProductToCart} = sliceCartReducer.actions
export const cartReducer = sliceCartReducer.reducer

// Types
type ProductCartType = ProductType & {
    count: number
}

