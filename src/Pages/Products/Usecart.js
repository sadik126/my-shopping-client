import React, { useEffect, useState } from 'react';
import { getproduct } from '../../utilities/fakedb';

const Usecart = (products) => {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const storedCart = getproduct();
        const savedcart = [];
        for (const id in storedCart) {
            const addedproduct = products?.find(product => product._id === id);
            if (addedproduct) {
                const quantity = storedCart[id];
                addedproduct.quantity = quantity;
                savedcart.push(addedproduct);
                setLoading(true)
            }
        }



        setCart(savedcart)

    }, [cart])
    return [cart, setCart]
};

export default Usecart;