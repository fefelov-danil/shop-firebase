import { Button } from 'components/button/Button';
import React from 'react';
import s from './Product.module.css'
import {useAppDispatch} from "features/utils/redux-utils";
import {addProductToCart, changeCartCount} from "components/reducers/cart-reducer";

type ProductsPropsType = {
    productId: string
    productName: string
    productImg: string
    productPrice: number
}

export const Product: React.FC<ProductsPropsType> = ({productId, productPrice, productName, productImg}) => {
    const dispatch = useAppDispatch()

    const addToCart = () => {
        dispatch(changeCartCount(1))
        dispatch(addProductToCart({productId, productName, productImg, productPrice}))
    }

    return (
        <div className={s.product}>
            <img src={productImg} alt=""/>
            <div className={s.info}>
                <p className={s.name}>{productName}</p>
                <div className={s.order}>
                    <span className={s.productPrice}>{productPrice}</span>
                    <Button onClick={addToCart}>Купить</Button>
                </div>
            </div>
        </div>
    );
};