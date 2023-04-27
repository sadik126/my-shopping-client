import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <>

            <div className="hero min-h-screen bg-white my-11">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-amber-700">Shopping</h1>
                        <h1 className="text-5xl font-bold text-black">Deliveries in 15 min</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-error">Get Started</button>
                        <button className="btn btn-ghost">Learn More</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;