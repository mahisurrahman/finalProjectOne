import { Helmet } from 'react-helmet-async';
import Covers from '../../components/covers/Covers';
import menuImage from '../../assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
import HeadingSubHeading from '../../components/headingSubHeading/HeadingSubHeading';
import MenuItem from '../../components/menuItem/menuItem';
import { NavLink } from 'react-router-dom';
import CoversTwo from '../../components/coversTwo/CoversTwo';
import dessertBg from '../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../assets/menu/pizza-bg.jpg';
import saladBg from '../../assets/menu/salad-bg.jpg';
import soupBg from '../../assets/menu/soup-bg.jpg';

const OurMenu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <div>
                <Covers img={menuImage} title={"Our Menu"} subTitle={"Would you like to try a dish?"}></Covers>
            </div>
            <div className='mt-20'>
                <HeadingSubHeading heading={"Today's Offer"} subHeading={"Don't Miss"}></HeadingSubHeading>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-20 mx-5 md:mx-40 my-10 md:my-5">
                    {
                        offered.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    }
                </div>
                <div className="mb-10 md:mb-20 text-center">
                    <NavLink><button className="uppercase px-4 py-2 text-xl text-black hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer border-b-2 border-black rounded-3xl mt-0 md:mt-10">Order Your Favourite Food</button></NavLink>
                </div>
            </div>
            <div>
                <div className='mx-5 md:mx-40 my-10 md:my-5'>
                    <CoversTwo img={dessertBg} title={"desserts"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CoversTwo>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-20 mx-5 md:mx-40 my-10 md:my-5">
                        {
                            dessert.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                    <div className="mb-10 md:mb-20 text-center">
                        <NavLink><button className="uppercase px-4 py-2 text-xl text-black hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer border-b-2 border-black rounded-3xl mt-0 md:mt-10">Order Your Favourite Food</button></NavLink>
                    </div>
                </div>
            </div>
            <div>
                <div className='mx-5 md:mx-40 my-10 md:my-5'>
                    <CoversTwo img={pizzaBg} title={"pizza"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CoversTwo>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-20 mx-5 md:mx-40 my-10 md:my-5">
                        {
                            pizza.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                    <div className="mb-10 md:mb-20 text-center">
                        <NavLink><button className="uppercase px-4 py-2 text-xl text-black hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer border-b-2 border-black rounded-3xl mt-0 md:mt-10">Order Your Favourite Food</button></NavLink>
                    </div>
                </div>
            </div>
            <div>
                <div className='mx-5 md:mx-40 my-10 md:my-5'>
                    <CoversTwo img={saladBg} title={"salad"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CoversTwo>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-20 mx-5 md:mx-40 my-10 md:my-5">
                        {
                            salad.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                    <div className="mb-10 md:mb-20 text-center">
                        <NavLink><button className="uppercase px-4 py-2 text-xl text-black hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer border-b-2 border-black rounded-3xl mt-0 md:mt-10">Order Your Favourite Food</button></NavLink>
                    </div>
                </div>
            </div>
            <div>
                <div className='mx-5 md:mx-40 my-10 md:my-5'>
                    <CoversTwo img={soupBg} title={"soup"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CoversTwo>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-20 mx-5 md:mx-40 my-10 md:my-5">
                        {
                            soup.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                    <div className="mb-10 md:mb-20 text-center">
                        <NavLink><button className="uppercase px-4 py-2 text-xl text-black hover:bg-black hover:text-white hover:duration-700 hover:cursor-pointer border-b-2 border-black rounded-3xl mt-0 md:mt-10">Order Your Favourite Food</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;