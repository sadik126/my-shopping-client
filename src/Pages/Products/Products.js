import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getproduct } from '../../utilities/fakedb';
import Product from './Product';

const Products = () => {
    const [cart, setCart] = useState([])
    const { data: products = [], isError, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('products.json')
            const data = await res.json()
            return data
        }
    })

    useEffect(() => {
        const storedCart = getproduct();
        console.log(storedCart)
        const savedcart = [];
        for (const id in storedCart) {
            const cartproduct = products.find(product => product._id === id)

            if (cartproduct) {


                const quantity = storedCart[id];
                cartproduct.quantity = quantity;
                savedcart.push(cartproduct);

            }
        }

        setCart(savedcart);


    }, [cart])

    const addtocart = (product) => {
        const newcart = [...cart, product]
        setCart(newcart)
        addToDb(product._id)
    }



    let total = 0;
    let shipping = 0;

    for (const product of cart) {



        total = total + parseInt(product.price);



    }

    let tax = parseFloat((total * 10 / 100).toFixed(2));

    let grandtotal = total + tax;

    return (
        <>

            <div className="container mx-auto">

                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">

                        <h2 className='text-3xl text-center uppercase font-mono mt-9 font-bold'>Our <span className='text-primary'>products</span> </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {
                                products.map(product => <Product key={product._id} product={product} addtocart={addtocart}></Product>)
                            }

                        </div>





                        {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            <h1 className='text-3xl font-extrabold text-center text-purple-600 my-10'>ORDER SUMMARY</h1>

                            <li className='font-semibold'>Total products:  {cart.length} items</li>
                            <hr />
                            <li className='font-semibold'>Total price: {total} BDT</li>
                            <hr />

                            <hr />
                            <li className='font-semibold'>Total tax:  {tax} BDT</li>
                            <hr />
                            <hr />
                            <hr />
                            <li className='text-primary text-3xl'>Total:{grandtotal} BDT</li>

                        </ul>
                    </div>
                </div>



            </div>



        </>
    );
};

export default Products;