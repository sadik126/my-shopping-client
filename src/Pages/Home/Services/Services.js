import React from 'react';
import delivery from '../../../images/delivery.png'

const Services = () => {
    return (
        <>

            <div className="">
                <div className="w-10/12 grid grid-cols-3 mx-auto justify-center" />

                <div className='flex justify-center items-center border border-primary rounded-sm'>

                    <img src={delivery} className='w-12 h-12 object-cover' alt="" />
                    <div className=''>
                        <h4 className='font-medium capitalize text-lg'>Free shopping</h4>
                        <p>Lorem ipsum dolor sit amet.</p>

                    </div>

                </div>

                <div className='flex justify-center items-center border border-primary rounded-sm'>

                    <img src={delivery} className='w-12 h-12 object-cover' alt="" />
                    <div className=''>
                        <h4 className='font-medium capitalize text-lg'>Free shopping</h4>
                        <p>Lorem ipsum dolor sit amet.</p>

                    </div>

                </div>

                <div className='flex justify-center items-center border border-primary rounded-sm'>

                    <img src={delivery} className='w-12 h-12 object-cover' alt="" />
                    <div className=''>
                        <h4 className='font-medium capitalize text-lg'>Free shopping</h4>
                        <p>Lorem ipsum dolor sit amet.</p>

                    </div>

                </div>



            </div>

        </>
    );
};

export default Services;