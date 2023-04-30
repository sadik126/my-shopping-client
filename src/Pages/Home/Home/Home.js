import React from 'react';
import Banner from '../Banner/Banner';
import Secondbanner from '../Secondbanner/Secondbanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto' style={{ overflow: 'hidden' }}>
            <Banner></Banner>

            <Services></Services>
            <Secondbanner></Secondbanner>



        </div>
    );
};

export default Home;