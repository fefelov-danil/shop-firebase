import React from 'react';
import s from './ProductInCart.module.css'
import {useAppDispatch} from "features/utils/redux-utils";
import {addProductToCart, changeCartCount, subtractProductToCart} from "components/reducers/cart-reducer";

type ProductInCartType = {
    count: number
    productId: string
    productName: string
    productImg: string
    productPrice: number
}

export const ProductInCart: React.FC<ProductInCartType> = ({count, productId, productName, productImg, productPrice}) => {
    const dispatch = useAppDispatch()

    const subtractCount = () => {
        dispatch(subtractProductToCart(productId))
        dispatch(changeCartCount(-1))
    }
    const addCount = () => {
        dispatch(addProductToCart({productId, productName, productImg, productPrice}))
        dispatch(changeCartCount(1))
    }

    return (
        <div key={productId} className={s.product}>
            <img src={productImg} alt=""/>
            <span className={s.name}>{productName}</span>
            <div className={s.count}>
                <button onClick={subtractCount}>-</button>
                <span>{count}</span>
                <button onClick={addCount}>+</button>
            </div>
            <span className={s.price}>{count * productPrice}</span>
        </div>
    );
};