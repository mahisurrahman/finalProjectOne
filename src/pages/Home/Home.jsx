import Banner from "../../components/banner/Banner";
import BannerSliders from "../../components/bannerSlider/BannerSliders";
import ChefRecommended from "../../components/chefRecommended/ChefRecommended";
import ContactNumber from "../../components/contactNumber/ContactNumber";
import FeaturedItems from "../../components/featuredItems/FeaturedItems";
import MenuLayer from "../../components/menuLayer/MenuLayer";
import OrderOnline from "../../components/orderOnline/OrderOnline";
import Testimonials from "../../components/testimonial/Testimonials";


const Home = () => {
    return (
        <div>
            <BannerSliders></BannerSliders>
            <OrderOnline></OrderOnline>
            <Banner></Banner>
            <MenuLayer></MenuLayer>
            <ContactNumber></ContactNumber>
            <ChefRecommended></ChefRecommended>
            <FeaturedItems></FeaturedItems>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;