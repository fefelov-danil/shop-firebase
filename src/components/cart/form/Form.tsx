import React from 'react';
import s from './Form.module.css'
import {InputText} from "components/inputText/InputText";
import {useFormik} from "formik";
import {Button} from "components/button/Button";
import {useAppSelector} from "features/utils/redux-utils";

type FormValueType = {
    name: string
    phone: string
    email: string
}

type FormikErrorType = {
    name?: string
    phone?: string
    email?: string
}

export const Form = () => {
    const productsInCart = useAppSelector(state => state.cart.productsInCart)

    const formik =useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.name) {
                errors.name = 'required'
            } else if (values.name.length < 1) {
                errors.name = 'Это обязательное поле';
            }

            if (!values.phone) {
                errors.phone = 'required'
            } else if (values.phone.length < 1) {
                errors.phone = 'Это обязательное поле';
            }

            if (!values.email) {
                errors.email = 'required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный email адресс';
            }

            return errors
        },
        onSubmit(value: FormValueType) {
            const toSend = {
                ...value,
                ...productsInCart
            }
            alert(JSON.stringify(toSend))
        }
    })

    return (
        <div className={s.form}>
            <h3>Оформить заказ</h3>
            <form onSubmit={formik.handleSubmit}>
                <InputText
                    placeholder={'Ваше имя'}
                    {...formik.getFieldProps('name')}/>
                {formik.touched.name && formik.errors.name &&
                    <div style={{color: 'red'}}>{formik.errors.name}</div>}
                <InputText
                    placeholder={'Ваш телефон'}
                    {...formik.getFieldProps('phone')}/>
                {formik.touched.phone && formik.errors.phone &&
                    <div style={{color: 'red'}}>{formik.errors.phone}</div>}
                <InputText
                    placeholder={'Ваш email'}
                    {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <Button>Заказать</Button>
            </form>
        </div>
    );
};