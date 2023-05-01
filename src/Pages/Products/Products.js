import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getproduct } from '../../utilities/fakedb';
import Loading from '../Shared/Loading/Loading';
import Navber from '../Shared/Navber/Navber';
import Product from './Product';
import Usecart from './Usecart';
import useProducts from './useProducts';

const Products = () => {

    const { data: products = [], isError, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://my-shopping-server-side.vercel.app/products')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    // const { products, setProducts } = useProducts()

    // const [cart, setCart] = Usecart(products);

    // useEffect(() => {
    //     const storedCart = getproduct();
    //     // console.log(storedCart)
    //     const savedcart = [];
    //     for (const id in storedCart) {
    //         const cartproduct = products.find(product => product._id === id)

    //         if (cartproduct) {


    //             const quantity = storedCart[id];
    //             cartproduct.quantity = quantity;
    //             savedcart.push(cartproduct);

    //         }
    //     }

    //     setCart(savedcart);


    // }, [cart])

    // const addtocart = (product) => {
    //     const newcart = [...cart, product]
    //     setCart(newcart)
    //     addToDb(product._id)
    // }



    // let total = 0;
    // let shipping = 0;

    // for (const product of cart) {



    //     total = total + parseInt(product.price);



    // }

    // let tax = parseFloat((total * 10 / 100).toFixed(2));

    // let grandtotal = total + tax;

    return (
        <div className='container mx-auto'>


            <div className="">


                <h2 className='text-3xl text-center uppercase font-mono mt-9 font-bold'>Our <span className='text-primary'>products</span> </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        products?.map(product => <Product key={product._id} product={product} ></Product>)
                    }

                </div>




            </div>



        </div>
    );
};

export default Products;