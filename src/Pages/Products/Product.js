import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/Cart';


const Product = (props) => {
    const { _id, name, price, minimum, available, description, img, loading } = props.product

    // const { addtocart } = props;

    const [cart, setCart] = useCart();

    const nevigate = useNavigate();


    const nevigatedetail = (id) => {
        nevigate(`/product/${id}`)
    }

    // const nevigateperchase = (id) => {
    //     nevigate(`/purchase/${id}`)
    // }

    return (
        <>

            <div class="card  shadow-xl p-5">
                <div class="px-10 pt-10">
                    <img style={{ height: "250px" }} src={img} height="170" width="384" alt="" />

                </div>

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    {/* class="rounded-xl" */}
                    <p>{description?.substring(0, 50)}...</p>
                    <p> {available > 0 ? <span className='text-green-600'>Available</span> : <span className='text-red-600'>Stock out</span>} </p>
                    <p>Price : {price} BDT</p>
                    {/* <p>Minimum : {minimum}</p> */}
                    <div class="card-actions">
                        <button onClick={() => {
                            setCart([...cart, props.product])

                            toast.success('Item added')
                            localStorage.setItem('cart', JSON.stringify(...cart))

                        }} class="btn btn-primary">Buy Now</button>
                        <button onClick={() => nevigatedetail(_id)} class="btn btn-secondary">Detail</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Product;