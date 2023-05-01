import React, { useContext } from 'react';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Authcontext } from '../../../Context/Authprovider';
import { useCart } from '../../../Context/Cart';
import logo from '../../../images/shopping-cart.png';
import logo1 from '../../../images/trolley.png';

const Navber = () => {

    const { user, Logout } = useContext(Authcontext)

    const [cart] = useCart();

    const nevigate = useNavigate();

    const handleLogout = () => {
        Logout()
            .then(() => {
                nevigate('/login')

            })
            .catch(err => console.log(err))
    }

    function CustomLink({ children, to, ...props }) {

        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true })

        return (
            <div>
                <Link style={{ color: match ? 'red' : 'black' }} to={to} {...props}>
                    {
                        children
                    }
                </Link>
            </div>
        )

    }


    const menuItems =
        <>
            <li><CustomLink to='/'>HOME</CustomLink></li>
            <li><CustomLink to='/products'>PRODUCTS</CustomLink></li>
            <li><CustomLink to='/dashboard'>DASHBOARD</CustomLink></li>

            {/* <li><CustomLink to='/login'>LOGIN</CustomLink></li> */}
            {
                user?.uid ? <li><CustomLink to='/login' onClick={handleLogout}>LOGOUT</CustomLink></li> : <li><CustomLink to='/login'>LOGIN</CustomLink></li>
            }

            {
                user?.uid ? <li><Link to='' className='text-orange-700'>Welcome  {user?.displayName?.substring(0, 5)}</Link></li> : <><Link to=''></Link></>
            }
            <li><CustomLink to='/cart'>CART <span className='badge'>{cart?.length} </span></CustomLink></li>
            {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary"> <img src={logo1} style={{ width: '15%' }} alt="" />Open Cart</label> */}


        </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems
                            }


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-semibold"><img src={logo} alt="" />MY   <span className='text-red-700'> SHOPPING</span></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>

        </>
    );
};

export default Navber;