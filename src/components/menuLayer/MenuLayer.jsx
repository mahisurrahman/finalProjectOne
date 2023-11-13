import { useEffect, useState } from "react";
import HeadingSubHeading from "../headingSubHeading/HeadingSubHeading";
import MenuItem from "../menuItem/menuItem";


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
        <div className="mx-5 md:mx-40 my-3 md:my-20">
            <div>
                <HeadingSubHeading heading={"From Our Menu"} subHeading={"Check it Out"}></HeadingSubHeading>
            </div>
            <div>
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
        </div>
    );
};

export default MenuLayer;