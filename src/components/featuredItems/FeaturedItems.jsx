import featuredImg from '../../assets/home/featured.jpg';
import { NavLink } from "react-router-dom";
import './featuredimage.css';

const FeaturedItems = () => {
    return (
        <div className="featured-img bg-fixed">
            <div className='bg-black bg-opacity-70 my-10 md:my-20 py-10 md:py-20'>
                <div className='mb-10 md:mb-20'>
                    <h2 className="text-lg text-[#D99904] text-center italic">---Check It Out---</h2>
                    <div className='flex justify-center my-3'>
                        <hr className='w-[40%]' />
                    </div>
                    <h2 className="text-5xl uppercase font-light text-center text-white">FROM OUR MENU</h2>
                    <div className='flex justify-center mt-3 mb-10'>
                        <hr className='w-[40%]' />
                    </div>
                </div>

                <div className="flex justify-center items-center px-5 md:px-40 gap-10 mb-10">
                    <div className="flex-1 hidden md:block">
                        <img src={featuredImg} className="w-[700px] h-[300px]" alt="" />
                    </div>
                    <div className="flex-1 text-white text-center md:text-left">
                        <p className="text-lg">March 20, 2023</p>
                        <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <NavLink><button className="my-2 px-4 py-2 border-b-2 rounded-xl border-white hover:bg-white hover:text-black hover:duration-700">Read More</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItems;