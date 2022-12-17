import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {productsReducer} from "components/reducers/products-reducer";
import {cartReducer} from "components/reducers/cart-reducer";
import {loadState} from "features/utils/localstorage-utils";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
    preloadedState: {
        cart: loadState('cart')
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart))
})

// @ts-ignore
window.store = store