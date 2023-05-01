import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Dashboard from '../../Layout/Dashboard/Dashboard';
import Main from '../../Layout/Main/Main';
import Dashboardsummary from '../../Pages/Dashboardsummary/Dashboardsummary';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Products from '../../Pages/Products/Products';
import Productsdetail from '../../Pages/Products/Productsdetail';
import Showcart from '../../Pages/Showcart/Showcart';
import Signup from '../../Pages/Signup/Signup';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/cart",
                element: <Showcart></Showcart>
            },
            {
                path: '/product/:id',
                element: <Productsdetail></Productsdetail>,
                loader: ({ params }) => fetch(`https://my-shopping-server-side.vercel.app/products/${params.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboardsummary></Dashboardsummary>
            }
        ]

    }
])

// const Route = () => {
//     return (
//         <>


//         </>
//     );
// };

export default router;