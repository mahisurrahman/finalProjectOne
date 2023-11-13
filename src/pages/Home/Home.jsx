import Banner from "../../components/banner/Banner";
import BannerSliders from "../../components/bannerSlider/BannerSliders";
import MenuLayer from "../../components/menuLayer/MenuLayer";
import OrderOnline from "../../components/orderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
            <BannerSliders></BannerSliders>
            <OrderOnline></OrderOnline>
            <Banner></Banner>
            <MenuLayer></MenuLayer>
            <h2>This is the Home Page</h2>
        </div>
    );
};

export default Home;