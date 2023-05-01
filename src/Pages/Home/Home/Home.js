import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Navber/Navber';
import Banner from '../Banner/Banner';
import Secondbanner from '../Secondbanner/Secondbanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto'>
            {/* <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content" style={{ overflow: 'hidden' }}> */}

            <Banner></Banner>


            {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div> */}



            <Services></Services>
            <Secondbanner></Secondbanner>





        </div>
    );
};

export default Home;