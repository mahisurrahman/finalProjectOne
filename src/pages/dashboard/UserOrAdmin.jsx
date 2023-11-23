import { NavLink } from 'react-router-dom';
import cupCake from '../../assets/others/cupcake.gif';

const UserOrAdmin = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center">
            <img src={cupCake} alt="" />
            <h2 className="text-4xl font-cinzel-font text-center font-bold tracking-widest">Welcome to Bistro Boss <br />Restaurant</h2>
            <div className='flex gap-5 my-5'>
                <NavLink to="/user-dashboard"><button className='px-4 py-2 border border-black rounded-full hover:bg-pink-400 hover:text-white hover:border-pink-400 hover:duration-700'>Sign In As User</button></NavLink>
                <NavLink to="/admin-dashboard"><button className='px-4 py-2 border hover:bg-white hover:text-black  hover:border-black rounded-full bg-red-950 text-white border-red-950 hover:duration-700'>Sign In As Admin</button></NavLink>
            </div>
        </div>
    );
};

export default UserOrAdmin;