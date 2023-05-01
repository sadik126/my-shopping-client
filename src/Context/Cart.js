import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();


const Cart = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let existingitems = localStorage.getItem('cart')
        console.log(existingitems)
        // if (existingitems) {
        //     setCart(JSON.parse(existingitems))
        // }
        // if (existingitems) {
        //     setCart(JSON.parse(existingitems))
        // }
    }, [])
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext)

export { useCart, Cart };