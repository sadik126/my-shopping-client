import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import Products from '../../Pages/Products/Products';

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