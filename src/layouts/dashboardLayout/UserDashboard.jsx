import { NavLink, Outlet } from "react-router-dom";
import { PiAddressBookFill } from "react-icons/pi";
import { IoIosWallet } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const UserDashboard = () => {
    return (
        <div className="flex">
            <div className="py-10 w-[20%] min-h-full bg-[#D1A054]">
                <div className="flex flex-col text-center text-black">
                    <h2 className="text-xl md:text-3xl font-cinzel-font font-black">Bistro Boss</h2 >
                    <h2 className="text-sm md:text-xl font-cinzel-font tracking-widest font-bold">Restaurant</h2 >
                </div>
                <div className="mt-10 pl-4 text-black">
                    <ul className="menu font-cinzel-font">
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="user-dashboard/"><IoHomeSharp className=" text-2xl"></IoHomeSharp>User Home</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="user-dashboard/user-reservation"><PiAddressBookFill className=" text-2xl"></PiAddressBookFill>Reservation</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="user-dashboard/user-payment-history"><IoIosWallet className=" text-2xl"></IoIosWallet>Payment History</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="user-dashboard/user-cart"><FaCartShopping className=" text-2xl"></FaCartShopping>My Cart</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="user-dashboard/user-add-review"><TbStarsFilled className=" text-2xl"></TbStarsFilled>Add Review</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="user-dashboard/user-booking"><FaCalendarAlt className=" text-2xl"></FaCalendarAlt>My Booking</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="px-5 py-5">
                    <hr className=" border-2 border-white" />
                </div>
                <div className="pl-4 text-black">
                    <ul className="menu font-cinzel-font">
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/"><IoHomeSharp className=" text-2xl"></IoHomeSharp>Home</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/our-menu"><TiThMenu className=" text-2xl"></TiThMenu>Menu</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/our-shop"><FaShoppingBag className=" text-2xl"></FaShoppingBag>Shop</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/contact"><IoMdMail className=" text-2xl"></IoMdMail>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pr-10 flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboard;