import Covers from '../../components/covers/Covers';
import ourShopBg from '../../assets/shop/banner2.jpg';
import { Helmet } from 'react-helmet-async';
import './ourShop.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import FoodCard from './../../components/foodCard/FoodCard';


const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro | Shop</title>
            </Helmet>
            <div>
                <Covers img={ourShopBg} title={"OUR SHOP"} subTitle={"Would You Like to Try a Dish?"}></Covers>
            </div>

            <div>
                <Tabs className="flex flex-col items-center mt-20" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Deserts</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel className="px-40 my-10">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                        {
                            salad.map(item => <FoodCard key={item._id} img={item.image} title={item.name} des={item.recipe}></FoodCard> )
                        }
                    </div>
                    </TabPanel>

                    <TabPanel className="px-40 my-10">
                        <h2>Any content 2</h2>
                    </TabPanel>

                    <TabPanel className="px-40 my-10">
                        <h2>Any content 3</h2>
                    </TabPanel>

                    <TabPanel className="px-40 my-10">
                        <h2>Any content 4</h2>
                    </TabPanel>

                    <TabPanel className="px-40 my-10">
                        <h2>Any content 5</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;