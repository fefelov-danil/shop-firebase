import React from 'react';
import s from './Products.module.css'
import {useAppSelector} from "features/utils/redux-utils";
import {Product} from "components/products/product/Product";

export const Products = () => {
    const products = useAppSelector(state => state.products)

    const productComponents = products.length
        ? products.map(p => {
            return (
                <Product
                    key={p.productId}
                    productName={p.productName}
                    productImg={p.productImg}
                    productPrice={p.productPrice}
                />
            )
        })
        : ''

    return (
        <div className={s.products}>
            <h1>Apple Watch</h1>
            <div className={s.columns}>
                {productComponents}
            </div>
        </div>
    );
};