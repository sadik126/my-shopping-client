import React, { useEffect } from 'react';
import Navber from '../../Pages/Shared/Navber/Navber';
import { Outlet } from 'react-router-dom'
import Footer from '../../Pages/Shared/Footer/Footer';
import Usecart from '../../Pages/Products/Usecart';
import { useQuery } from '@tanstack/react-query';
import { addToDb, getproduct } from '../../utilities/fakedb';
import { useState } from 'react';
import Loading from '../../Pages/Shared/Loading/Loading';
import useProducts from '../../Pages/Products/useProducts';


const Main = () => {








    return (
        <>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>










            {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}






        </>
    );
};

export default Main;