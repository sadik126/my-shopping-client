import React from 'react';
import delivery from '../../../images/delivery.png';
import money from '../../../images/save-money.png';
import Support from '../../../images/24-hours.png';

const Services = () => {
    return (
        <>

            <>
                <div className="p-20  mb-12 grid items-center justify-around grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >


                    <div class="stat text-center">
                        <div class="stat-figure text-primary">
                            <img src={delivery} className="w-20" alt="" />
                        </div>
                        <div class="stat-title">Free shipping</div>



                        <div class="stat-value text-primary"> 100% </div>
                        <div class="stat-desc">Quick delivery</div>
                    </div>


                    <div class="stat text-center">
                        <div class="stat-figure text-primary">
                            <img src={money} className="w-20" alt="" />
                        </div>
                        <div class="stat-title">Money Back</div>



                        <div class="stat-value text-secondary"> 30 days </div>
                        <div class="stat-desc"> you will get your money back</div>
                    </div>


                    <div class="stat text-center">
                        <div class="stat-figure text-primary">
                            <img src={Support} className="w-20" alt="" />
                        </div>
                        <div class="stat-title">Support</div>



                        <div class="stat-value text-accent"> 24/7  </div>
                        <div class="stat-desc">Customer service</div>
                    </div>

                </div>









                {/* <div className='flex justify-center items-center'>

                    <img src={delivery} className='w-12 h-12 object-cover' alt="" />
                    <div className=''>
                        <h4 className='font-medium capitalize text-lg'>Free shopping</h4>
                        <p>Lorem ipsum dolor sit amet.</p>

                    </div>

                </div> */}







            </>

        </>
    );
};

export default Services;