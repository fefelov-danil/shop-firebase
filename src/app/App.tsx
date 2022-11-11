import React, {useEffect} from 'react';
import 'assets/geniral-css/reset.css'
import 'assets/geniral-css/style.css';
import s from './App.module.css'
import 'firebase/compat/auth';
import {useAppDispatch} from "features/utils/redux-utils";
import {fetchProducts} from "components/reducers/products-reducer";
import firebase from 'firebase/compat/app';
import {getFirestore} from "firebase/firestore/lite";
import {Products} from "components/products/Products";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpX2olToQBDohBldWqU9bFKRmFwpErPQY",
  authDomain: "shop-incubator.firebaseapp.com",
  projectId: "shop-incubator",
  storageBucket: "shop-incubator.appspot.com",
  messagingSenderId: "860545723721",
  appId: "1:860545723721:web:ac624813e0195faf833e98",
  measurementId: "G-SH6VGHM6M8"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts(db))
  }, [])

  return (
    <div className={s.app}>

      <Products/>
    </div>
  );
}