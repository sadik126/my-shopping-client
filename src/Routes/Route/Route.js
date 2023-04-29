import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Products from '../../Pages/Products/Products';
import Productsdetail from '../../Pages/Products/Productsdetail';

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
                path: '/product/:id',
                element: <Productsdetail></Productsdetail>,
                loader: ({ params }) => fetch(`http://localhost:5020/products/${params.id}`)
            },

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