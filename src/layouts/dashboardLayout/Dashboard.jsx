import { NavLink, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import { MdStorage } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Dashboard = () => {
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
                            <NavLink to="/dashboard/cart"><IoHomeSharp className=" text-2xl"></IoHomeSharp>Admin Home</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/dashboard/cart"><TbToolsKitchen2 className=" text-2xl"></TbToolsKitchen2>Add Items</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/dashboard/cart"><MdStorage className=" text-2xl"></MdStorage>Manage Items</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/dashboard/cart"><FaBook className=" text-2xl"></FaBook>Manage Bookings</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/dashboard/cart"><BsPeopleFill className=" text-2xl"></BsPeopleFill>All Users</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="px-5 py-5">
                    <hr className=" border-2 border-white" />
                </div>
                <div className="pl-4 text-black">
                    <ul className="menu font-cinzel-font">
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/dashboard/cart"><IoHomeSharp className=" text-2xl"></IoHomeSharp>Home</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/dashboard/cart"><TiThMenu className=" text-2xl"></TiThMenu>Menu</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/dashboard/cart"><FaShoppingBag className=" text-2xl"></FaShoppingBag>Shop</NavLink>
                        </li>
                        <li className="py-1 font-semibold tracking-wider" >
                            <NavLink to="/dashboard/cart"><IoMdMail className=" text-2xl"></IoMdMail>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pr-10 flex-1 w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;