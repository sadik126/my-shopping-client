import React from 'react';
import { useCart } from '../../Context/Cart';

const Showcart = () => {
    const [cart, setCart] = useCart();
    console.log(cart)



    const handleDelete = (id) => {
        const agree = window.confirm(`are you sure to delete this item?`)

        if (agree) {
            const remaining = cart.filter(item => item._id !== id)
            setCart(remaining)
        }

    }
    return (
        <div className='container mx-auto' style={{ height: '100vh' }}>
            <h1 className='text-3xl text-center uppercase font-mono mt-9 font-bold'>Here is your Cart</h1>
            <div className='grid grid-cols-1'>
                <h4 className='text-center'>{cart?.length > 1 ? `you have ${cart.length} items` : `You dont have any items`}</h4>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>

                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart?.map(product =>
                                    <tr>

                                        <td>
                                            <div className="avatar">
                                                <div className="w-24 mask mask-squircle">
                                                    <img src={product.img} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{product.name} </td>
                                        <td>{product.price} BDT</td>
                                        <td><button onClick={() => handleDelete(product._id)} className="btn btn-error">Delete</button></td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>


            </div>



        </div>
    );
};

export default Showcart;