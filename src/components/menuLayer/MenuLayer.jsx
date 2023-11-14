import { useEffect, useState } from "react";
import HeadingSubHeading from "../headingSubHeading/HeadingSubHeading";
import MenuItem from "../menuItem/menuItem";
import { NavLink } from "react-router-dom";


const MenuLayer = () => {
    const [menu, setMenu]= useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    
    return (
        <div className="mx-5 md:mx-40 my-10 md:my-20">
            <div>
                <HeadingSubHeading heading={"From Our Menu"} subHeading={"Check it Out"}></HeadingSubHeading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-20 mb-5 md:mb-10">
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
            <div className="mt-10 md:mt-0 mb-10 md:mb-20 text-center">
                <NavLink><button className="uppercase px-4 py-2 text-xl text-black hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer border-b-2 border-black rounded-3xl mt-0 md:mt-10">View Full Menu</button></NavLink>
            </div>
        </div>
    );
};

export default MenuLayer;