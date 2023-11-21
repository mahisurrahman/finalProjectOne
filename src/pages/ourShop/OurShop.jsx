import Covers from '../../components/covers/Covers';
import ourShopBg from '../../assets/shop/banner2.jpg';
import { Helmet } from 'react-helmet-async';
import './ourShop.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import FoodCard from './../../components/foodCard/FoodCard';
import { useParams } from 'react-router-dom';


const OurShop = () => {
    const categories = ['salad', 'pizza', 'dessert', 'soup', 'drinks', 'offered'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    // const [tabIndex, setTabIndex] = useState(initialIndex);
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
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
                <Tabs className="flex flex-col items-center mb-20" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="mt-20 mb-10">
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Deserts</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Offered</Tab>
                    </TabList>

                    <TabPanel className="px-40">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel className="px-40 ">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel className="px-40 ">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel className="px-40 ">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                            {
                                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel className="px-40 ">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel className="px-40 ">
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-center'>
                            {
                                offered.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;