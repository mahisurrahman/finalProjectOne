import { NavLink } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { IoCart } from "react-icons/io5";
import useCart from '../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const logOutHandler = () => {
        logOut();
    }

    const links = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
            }
        >
            Contact Us
        </NavLink>
        <NavLink
            to="/admin-or-user"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
            }
        >
            Dashboard
        </NavLink>
        <NavLink
            to="/our-shop"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
            }
        >
            Our Shop
        </NavLink>
        <NavLink
            to="/our-menu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400" : ""
            }
        >
            Our Menu
        </NavLink>
        <NavLink
            to="/dashboard/dash-cart"
        >
            <button className="flex items-center text-2xl rounded-2xl hover:text-3xl hover:duration-700 py-2">
                <IoCart></IoCart>
                <div className="badge bg-transparent text-yellow-400 border-none px-0">+{cart.length}</div>
            </button>
        </NavLink>

        {
            user ? <div className='flex items-center gap-2'>
                <NavLink to="/"><button onClick={logOutHandler} className='hover:text-yellow-500 hover:cursor-pointer text-md flex gap-2 items-center'>Log Out</button></NavLink>
                <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
            </div>

                :
                <div className='flex items-center gap-2'>
                    <NavLink to="/login"><button className='hover:text-yellow-500 hover:cursor-pointer text-md flex gap-2 items-center'><FaUserAlt></FaUserAlt>Login</button></NavLink>
                </div>
        }
    </>

    return (
        <>
            <div className="navbar max-w-full fixed z-10 bg-opacity-80 md:bg-opacity-30 text-white bg-black py-2 px-0 md:px-10 flex justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black py-5 rounded-box w-52 hover:pointer">
                            {links}
                        </ul>
                    </div>
                    <div className="flex flex-col text-center text-white">
                        <h2 className="text-xl md:text-3xl font-cinzel-font font-black">Bistro Boss</h2 >
                        <h2 className="text-sm md:text-xl font-cinzel-font tracking-widest">Restaurant</h2 >
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4 items-center hover:pointer">
                        {links}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;