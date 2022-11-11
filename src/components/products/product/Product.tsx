import { Button } from 'components/button/Button';
import React from 'react';
import s from './Product.module.css'

type ProductsPropsType = {
    productName: string
    productImg: string
    productPrice: number
}

export const Product: React.FC<ProductsPropsType> = ({productPrice, productName, productImg}) => {
    return (
        <div className={s.product}>
            <img src={productImg} alt=""/>
            <div className={s.info}>
                <p className={s.name}>{productName}</p>
                <div className={s.order}>
                    <span className={s.productPrice}>{productPrice}</span>
                    <Button>Купить</Button>
                </div>
            </div>
        </div>
    );
};