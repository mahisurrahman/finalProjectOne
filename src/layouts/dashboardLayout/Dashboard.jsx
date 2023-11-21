import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="py-10 pl-10 w-[30%] min-h-full bg-[#D1A054]">
                <ul className="menu">
                    <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
                </ul>
            </div>
            <div className="pr-10 flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;