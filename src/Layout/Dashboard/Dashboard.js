import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber from '../../Pages/Shared/Navber/Navber';
import dashboard from '../../images/dashboard.png';

const Dashboard = () => {
    return (
        <div>
            <Navber></Navber>


            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'> <img src={dashboard} alt="" /> Dashboard</Link></li>
                        <li><Link to='/allproducts'> <img src={dashboard} alt="" />All Products</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;