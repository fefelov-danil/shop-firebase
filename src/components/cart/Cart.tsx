import React from 'react';
import s from './Cart.module.css'
import {Form} from "components/cart/form/Form";
import {useAppSelector} from "features/utils/redux-utils";
import {ProductInCart} from "components/cart/prodictInCart/ProductInCart";

export const Cart = () => {
    const productsInCart = useAppSelector(state => state.cart.productsInCart)
    const totalCost = useAppSelector(state => state.cart.totalCost)

    return (
        <div className={s.cart}>
            <div className="container">
                <h1>Корзина</h1>
                <div className={s.columns}>
                    <div className={s.products}>
                        {productsInCart.length ? productsInCart.map(p => {
                                return <ProductInCart
                                    key={p.productId}
                                    count={p.count}
                                    productId={p.productId}
                                    productName={p.productName}
                                    productImg={p.productImg}
                                    productPrice={p.productPrice}
                                />
                            })
                            : <p className={s.cartEmpty}>Корзина пуста</p>}
                        <div className={s.totalCost}>Общая стоимость: {totalCost} р.</div>
                    </div>
                    <div className={s.order}>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    );
};