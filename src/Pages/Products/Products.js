import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from './Product';

const Products = () => {
    const { data: products = [], isError, isLoading } = useQuery({
        queryKey: ['tools'],
        queryFn: async () => {
            const res = await fetch('https://sadik126.github.io/my-shopping-api/products.json')
            const data = await res.json()
            return data
        }
    })

    return (
        <>
            <div className="container mx-auto">
                <h2 className='text-3xl text-center uppercase font-mono mt-9 font-bold'>Our <span className='text-primary'>products</span> </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }

                </div>

            </div>

        </>
    );
};

export default Products;