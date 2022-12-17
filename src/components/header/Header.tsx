import React from 'react';
import s from './Header.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAppSelector} from "features/utils/redux-utils";
import {NavLink} from "react-router-dom";

export const Header = () => {
    const totalCost = useAppSelector(state => state.cart.totalCost)

    return (
        <div className={s.header}>
            <div className={'container'}>
                <p className={s.projectName}>Тестовое: карточки товаров (информация подгружается с firebase) с корзиной</p>
                <div className={s.cart}>
                    <NavLink to={'/'}>Товары</NavLink>
                    <NavLink to={'/cart'}>
                        <span>Корзина</span>
                        <ShoppingCartIcon sx={{ color: '#fff', fontSize: 30 }}/>
                        {totalCost ? <span className={s.count}>{totalCost} р.</span> : ''}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};